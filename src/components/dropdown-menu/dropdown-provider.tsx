import { createContext, FC, PropsWithChildren, useMemo, useReducer } from 'react';

export enum DropdownAction {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export type Action = {
  type: DropdownAction;
  payload: {
    id?: string;
  };
};

export type DropdownState = {
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

type TransitionProps = unknown;

type ContextProps = {
  state: DropdownState;
  dispatch: (action: Action) => void;
  transitionProps: TransitionProps;
};

export const DropdownContext = createContext<ContextProps>({
  state: { activeDropdown: null },
  dispatch: () => {},
  transitionProps: {},
});

export const DropdownProvider: FC<PropsWithChildren> = ({ children, ...transitionProps }) => {
  const [state, dispatch] = useReducer(reducer, { activeDropdown: null });
  const value = useMemo(() => ({ state, dispatch, transitionProps }), [state, transitionProps]);

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
};
