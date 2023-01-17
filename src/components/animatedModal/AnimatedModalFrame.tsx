import React, { FC } from 'react';

interface IAnimatedModalProps {
  children?: React.ReactNode;
}

export const AnimatedModalFrame: FC<IAnimatedModalProps> = (props) => {
  return <div id="animated-modal-frame">{props.children}</div>;
};
