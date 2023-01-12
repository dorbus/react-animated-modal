import React, { FC } from 'react';

interface IAnimatedModalProps {
  children?: React.ReactNode;
}

const AnimatedModalFrame: FC<IAnimatedModalProps> = (props) => {
  return <div className="content">{props.children}</div>;
};

export default AnimatedModalFrame;
