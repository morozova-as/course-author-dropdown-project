import { FC } from 'react';

type TriggerElementProps = {
  onClick: () => void;
};

export type TriggerComponentProps = {
  TriggerElement: FC<TriggerElementProps>;
};
