import { FC, useCallback, useMemo, useRef } from 'react';
import { useOutsideClick } from 'hooks';
import { clsx } from 'clsx';
import { DropdownItem } from './dropdown-item';
import { DropdownView } from './dropdown-view';
import { useDropdown } from './use-dropdown';
import { DropdownMenuProps } from './types';
import styles from './styles/dropdown-menu.module.scss';

export const DropdownMenu: FC<DropdownMenuProps> = ({ id, TriggerElement, menuElements, className }) => {
  const refReferenceElement = useRef<HTMLButtonElement>(null);
  const { openDropdown, closeDropdown, state } = useDropdown();
  const isActive = useMemo<boolean>(() => {
    return state.activeDropdown?.id === id;
  }, [state, id]);

  const handleClickOutside = useCallback(() => {
    if (isActive) {
      closeDropdown();
    }
  }, [isActive, id, closeDropdown]);
  const refContainer = useOutsideClick(handleClickOutside);

  const onTriggerClick = useCallback(() => {
    if (isActive) {
      closeDropdown();
    } else {
      openDropdown(id);
    }
  }, [isActive, id]);

  return (
    <div className={clsx(className, styles.container)} ref={refContainer}>
      <TriggerElement ref={refReferenceElement} onClick={onTriggerClick} />
      <DropdownView isActive={isActive} triggerElementRef={refReferenceElement}>
        {menuElements.map(({ text, Icon, onClick }) => (
          <DropdownItem
            key={text}
            text={text}
            Icon={Icon}
            onClick={() => {
              closeDropdown();
              if (onClick) onClick();
            }}
          />
        ))}
      </DropdownView>
    </div>
  );
};
