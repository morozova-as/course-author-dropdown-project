import { forwardRef } from 'react';
import { Button } from 'components/button';
import { MoreVerticalIcon } from 'components/icons';
import styles from './styles.module.scss';
import { TriggerElementProps } from '../dropdown-menu/types';

export const ExampleButton = forwardRef<HTMLButtonElement, TriggerElementProps>(({ onClick }, ref) => {
  return (
    <Button ref={ref} className={styles.button} onClick={onClick}>
      <MoreVerticalIcon />
    </Button>
  );
});
ExampleButton.displayName = 'ExampleButton';
