import { forwardRef, PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

type ButtonProps = PropsWithChildren<{
  href?: string;
  className?: string;
}>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className }, ref) => {
  return (
    <button ref={ref} className={clsx(className, styles.button)}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
