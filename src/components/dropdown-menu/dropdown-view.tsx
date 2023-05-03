import { FC, PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import { Modifier, usePopper } from 'react-popper';
import { CSSTransition } from 'react-transition-group';
import { DropdownViewProps } from './types';
import styles from './styles/dropdown-view.module.scss';

const TRANSFORMS = {
  'bottom-end': 'top right',
  'bottom-start': 'top left',
  'top-start': 'bottom left',
  'top-end': 'bottom right',
};

export const DropdownView: FC<PropsWithChildren<DropdownViewProps>> = ({
  isActive,
  triggerElementRef,
  children,
}) => {
  const refPopoverElement = useRef<null | HTMLDivElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isInViewPort, setIsInViewPort] = useState(true);
  const [transformOrigin, setTransformOrigin] = useState('top left');

  const defineTransformOrigin = useMemo<Modifier<'defineTransformOrigin'>>(
    () => ({
      name: 'defineTransformOrigin',
      enabled: true,
      phase: 'beforeWrite',
      fn: ({ state }) => {
        setTransformOrigin(TRANSFORMS[state.placement as keyof typeof TRANSFORMS] || 'top left');
      },
    }),
    [setTransformOrigin]
  );

  const hideOnScroll = useMemo<Modifier<'eventListeners'>>(
    () => ({
      name: 'eventListeners',
      enabled: true,
      fn: ({ state }) => {
        setIsInViewPort(state.attributes.popper['data-popper-reference-hidden'] === false);
      },
    }),
    [setIsInViewPort]
  );

  const { styles: popoverStyles, attributes } = usePopper(
    triggerElementRef.current,
    refPopoverElement.current,
    {
      placement: 'bottom-start',
      modifiers: [
        { name: 'eventListeners', enabled: isActive },
        {
          name: 'flip',
          enabled: true,
          options: {
            fallbackPlacements: ['bottom-end', 'bottom-start', 'top-start', 'top-end'],
          },
        },
        defineTransformOrigin,
        hideOnScroll,
      ],
    }
  );

  useEffect(() => {
    refPopoverElement.current?.style.setProperty('--transform-origin', transformOrigin);
  }, [transformOrigin]);

  return (
    <div ref={refPopoverElement} style={popoverStyles.popper} {...attributes.popper}>
      <CSSTransition
        nodeRef={nodeRef}
        in={isActive && isInViewPort}
        timeout={150}
        unmountOnExit
        classNames={{
          enter: styles.dropdownEnter,
          enterActive: styles.dropdownEnterActive,
          exit: styles.dropdownExit,
          exitActive: styles.dropdownExitActive,
        }}>
        <div className={styles.container} ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
