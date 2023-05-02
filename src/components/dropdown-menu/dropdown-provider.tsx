import { createContext, FC, PropsWithChildren, useMemo, useReducer } from 'react';

export enum DropdownAction {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

type Action = {
  type: DropdownAction;
  payload: {
    id?: string;
  };
};

type DropdownState = {
  activeDropdown: { id?: string } | null;
};

const reducer = (state: DropdownState, { type, payload }: Action) => {
  switch (type) {
    case DropdownAction.OPEN:
      return {
        activeDropdown: payload,
      };
    case DropdownAction.CLOSE:
      return {
        activeDropdown: null,
      };
    default:
      return state;
  }
};

type ContextProps = {
  state: DropdownState;
  dispatch: (action: Action) => void;
};

export const DropdownContext = createContext<ContextProps>({
  state: { activeDropdown: null },
  dispatch: () => {},
});

export const DropdownProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { activeDropdown: null });
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};
