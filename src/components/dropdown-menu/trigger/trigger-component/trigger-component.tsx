import { FC } from 'react';
import { TriggerComponentProps } from './types';

export const TriggerComponent: FC<TriggerComponentProps> = ({TriggerElement}) => {
  return <TriggerElement onClick={() => {}} />;
};
