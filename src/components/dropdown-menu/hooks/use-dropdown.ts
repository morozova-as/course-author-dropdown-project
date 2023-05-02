import { useContext } from 'react';
import { DropdownAction, DropdownContext } from '../dropdown-provider';

export const useDropdown = () => {
  const { state, dispatch } = useContext(DropdownContext);

  const openDropdown = (id: string) => dispatch({ type: DropdownAction.OPEN, payload: { id } });
  const closeDropdown = () => dispatch({ type: DropdownAction.CLOSE, payload: {} });

  return { state, openDropdown, closeDropdown };
};
