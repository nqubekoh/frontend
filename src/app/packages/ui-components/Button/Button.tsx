// Button.tsx
import styles from './Button.module.sass';
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  const className = variant === 'secondary' ? styles.secondary : styles.primary;
  return (
      <button className={className} {...props}>
        {children}
      </button>
  );
};
