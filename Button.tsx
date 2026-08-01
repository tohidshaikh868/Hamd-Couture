import { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { motion, HTMLMotionProps } from 'motion/react';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center font-medium tracking-widest uppercase transition-colors focus:outline-none rounded-sm',
          {
            'bg-luxury-charcoal text-white hover:bg-luxury-gold': variant === 'primary',
            'bg-luxury-gold text-white hover:bg-luxury-charcoal': variant === 'secondary',
            'border border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white': variant === 'outline',
            'text-luxury-charcoal hover:text-luxury-gold': variant === 'ghost',
            'px-6 py-2 text-xs': size === 'sm',
            'px-8 py-3 text-sm': size === 'md',
            'px-10 py-4 text-sm': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
