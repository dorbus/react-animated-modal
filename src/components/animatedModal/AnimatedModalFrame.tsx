import React, { FC } from 'react';

interface IAnimatedModalProps {
  children?: React.ReactNode;
}

const AnimatedModalFrame: FC<IAnimatedModalProps> = (props) => {
  return <div id="animated-modal-frame">{props.children}</div>;
};

export default AnimatedModalFrame;
