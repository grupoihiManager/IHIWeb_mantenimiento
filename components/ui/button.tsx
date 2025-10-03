import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  children,
  className = '',
  icon
}: ButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-all duration-200 font-inter flex items-center gap-2 justify-center";

  const variants = {
    primary: "bg-blue-primary hover:bg-blue-dark text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white hover:bg-gray-50 text-blue-primary border-2 border-blue-primary hover:border-blue-dark",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-900"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && icon}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
    >
      {content}
    </motion.button>
  );
}