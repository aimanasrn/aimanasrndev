import fs from "fs"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

const projectsDir = path.resolve(import.meta.dirname, "public/projects")
// When the same file exists in several formats, the lighter one wins.
const imageFormats = ["avif", "webp", "png", "jpg", "jpeg", "gif"]
const videoFormats = ["webm", "mp4", "mov"]
const naturalOrder = new Intl.Collator(undefined, { numeric: true })

interface MediaFile {
  file: string
  type: "image" | "video"
  rank: number
}

// Lists the screenshots and videos in each public/projects/<folder>, so adding
// project media only means dropping a file into that project's folder.
// Videos come first, then images, each sorted by file name.
function readProjectMedia() {
  const media: Record<string, { type: MediaFile["type"]; src: string }[]> = {}
  if (!fs.existsSync(projectsDir)) return media

  for (const folder of fs.readdirSync(projectsDir, { withFileTypes: true })) {
    if (!folder.isDirectory()) continue
    const byName = new Map<string, MediaFile>()
    for (const file of fs.readdirSync(path.join(projectsDir, folder.name))) {
      const extension = path.extname(file).slice(1).toLowerCase()
      const imageRank = imageFormats.indexOf(extension)
      const videoRank = videoFormats.indexOf(extension)
      const type = videoRank !== -1 ? "video" : "image"
      const rank = type === "video" ? videoRank : imageRank
      if (rank === -1) continue
      const name = `${type}:${path.basename(file, path.extname(file))}`
      const current = byName.get(name)
      if (!current || rank < current.rank)
        byName.set(name, { file, type, rank })
    }
    media[folder.name] = [...byName.values()]
      .sort(
        (a, b) =>
          Number(a.type === "image") - Number(b.type === "image") ||
          naturalOrder.compare(a.file, b.file)
      )
      .map(({ file, type }) => ({
        type,
        src: `/projects/${encodeURIComponent(folder.name)}/${encodeURIComponent(file)}`,
      }))
  }
  return media
}

function projectMedia(): Plugin {
  const id = "virtual:project-media"
  const resolvedId = `\0${id}`
  return {
    name: "project-media",
    resolveId: (source) => (source === id ? resolvedId : undefined),
    load: (source) =>
      source === resolvedId
        ? `export default ${JSON.stringify(readProjectMedia())}`
        : undefined,
    configureServer(server) {
      const refresh = (file: string) => {
        if (!path.resolve(file).startsWith(projectsDir)) return
        const graph = server.environments.client.moduleGraph
        const module = graph.getModuleById(resolvedId)
        if (module) graph.invalidateModule(module)
        server.ws.send({ type: "full-reload" })
      }
      server.watcher.on("add", refresh)
      server.watcher.on("unlink", refresh)
      server.watcher.on("addDir", refresh)
      server.watcher.on("unlinkDir", refresh)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), projectMedia()],
  resolve: {
    dedupe: ["react", "react-dom"],
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        // Split big libraries into their own files so they download in
        // parallel and stay cached when only site content changes.
        codeSplitting: {
          groups: [
            {
              name: "react",
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            },
            {
              name: "motion",
              test: /node_modules[\\/](motion|framer-motion|motion-dom|motion-utils)[\\/]/,
            },
            { name: "gsap", test: /node_modules[\\/](gsap|@gsap)[\\/]/ },
          ],
        },
      },
    },
  },
})
