import { forwardRef, PropsWithChildren } from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.scss';

type ButtonProps = PropsWithChildren<{
  href?: string;
  className?: string;
  onClick?: () => void;
}>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, onClick }, ref) => {
  return (
    <button ref={ref} className={clsx(className, styles.button)} onClick={onClick}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
