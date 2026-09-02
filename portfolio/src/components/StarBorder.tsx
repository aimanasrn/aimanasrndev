import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  secondaryColor?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  secondaryColor = color,
  speed = '6s',
  thickness = 1,
  backgroundColor = '#000000',
  textColor = '#ffffff',
  borderColor = '#222222',
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`star-border relative inline-block rounded-[20px] ${className}`}
      {...(rest as any)}
      style={{
        '--star-border-color': color,
        '--star-border-secondary-color': secondaryColor,
        '--star-border-speed': speed,
        '--star-border-thickness': `${thickness}px`,
        ...(rest as any).style
      } as React.CSSProperties}
    >
      <span aria-hidden="true" className="star-border-glow" />
      <div
        className="relative z-[1] rounded-[inherit] border px-[26px] py-[16px] text-center text-[16px]"
        style={{ background: backgroundColor, color: textColor, borderColor }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
