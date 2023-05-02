import { FC, ForwardRefExoticComponent, MutableRefObject, RefAttributes } from 'react';

export type DropdownItemProps = {
  text: string;
  Icon: FC<{ size?: number }>;
  onClick?: () => void;
};

export type DropdownViewProps = {
  isActive: boolean;
  triggerElementRef: MutableRefObject<HTMLElement | null>;
};

export type TriggerElementProps = {
  onClick: () => void;
};

export type DropdownTriggerProps = {
  TriggerElement: ForwardRefExoticComponent<TriggerElementProps & RefAttributes<HTMLButtonElement>>;
  triggerMove: 'onClick' | 'onHover';
};

export type DropdownComponentProps = {
  menuElements: DropdownItemProps[];
  id: string;
  className?: string;
};

export type DropdownMenuProps = DropdownTriggerProps & DropdownComponentProps;
