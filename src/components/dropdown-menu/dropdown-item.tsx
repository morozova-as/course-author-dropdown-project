import { FC } from 'react';
import { DropdownItemProps } from './types';
import styles from './styles/dropdown-item.module.scss';

export const DropdownItem: FC<DropdownItemProps> = ({ text, Icon, onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <div className={styles.content}>{text}</div>
      <div className={styles.icon}>
        <Icon size={20} />
      </div>
    </button>
  );
};
