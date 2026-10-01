# AIMANASRN portfolio

React, TypeScript and Vite portfolio with responsive contact information and policy pages.

## Run locally

```sh
npm install
npm run dev
```

Build the deployable website with `npm run build`. The output is in `dist/`.

## Policies and business details

The menu, contact section and shared footer link to four public pages:

- `/#policies/refund`
- `/#policies/privacy`
- `/#policies/shipping-returns`
- `/#policies/business-contact`

Hash-based links work on static hosting without additional route rewrites and support direct links, reloads and browser history.

Update the shared business information in `src/content/business.ts`. The email and portfolio owner are taken from the existing website. The full business address, phone number and any registration number must be supplied by the owner; unknown values are intentionally empty. Address and phone values are displayed consistently in the contact area and business page; the footer also displays the address and configured phone.

Policy copy is in `src/components/PolicyPage.tsx`. The proposed terms assume software development and digital delivery only: full refunds before work starts, assessment of unperformed work after kickoff, refund review within 5 business days, approved refunds initiated within 10 business days, and kickoff scheduled within 3 business days after the agreement, payment and required materials are received. Completion dates are specified in each project's written quotation.

Before publication, confirm the business model, legal business identity, address, phone, refund and delivery commitments, hosting/email/payment providers, data processing locations, retention and privacy practices, and any applicable language requirements. The privacy copy reflects the current application: email links, no account or checkout forms, no application analytics scripts, and theme preference storage. Check the actual live hosting configuration separately. Reference guidance: [Malaysia Personal Data Protection Department](https://www.pdp.gov.my/ppdpv1/en/faq/) and [KPDN electronic trade regulations](https://repositori.kpdn.gov.my/bitstream/123456789/5299/1/PERATURAN%20URUSNIAGA%20PERDAGANGAN%20DALAM%20ELEKTRONIK%202024.pdf).

Set `policiesConfirmed` to `true` only after these details and policy text have been confirmed, and update the policy date. Until then, the policy pages visibly identify themselves as drafts. Adding draft pages alone does not satisfy a live website's publication criteria.

Deploy the built `dist/` folder through the website's existing hosting service. A successful local build does not publish the changes to the live website.

## Checks

```sh
npm run build
npm run lint
```

The existing `LogoLoop.tsx` and `StarBorder.tsx` components have pre-existing lint errors. Changed policy, contact, navigation and footer files can be checked independently with ESLint.
