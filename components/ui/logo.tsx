import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: "w-12 h-12 text-lg",
    md: "w-20 h-20 text-2xl",
    lg: "w-28 h-28 text-3xl"
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      <div className={`${sizes[size]} bg-blue-primary rounded-2xl mx-auto flex items-center justify-center`}>
        <span className="text-white font-bold font-manrope">IHI</span>
      </div>
    </motion.div>
  );
}