import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import React, { useRef } from 'react';

import {
  AnimatedModal,
  AnimatedModalObject,
  ModalAnimation,
  AnimatedModalFrame
} from '../../components';

export default {
  title: 'Components/AnimatedModal',
  component: AnimatedModal
} as Meta;

// Create a master template for mapping args to render the Flexboard component
const AnimatedModalTemplate: Story = () => {
  const ref = useRef<AnimatedModalObject>(null);

  return (
    <>
      <AnimatedModal ref={ref} animation={ModalAnimation.Unfold} />
      <AnimatedModalFrame>
        <button onClick={() => ref.current?.OpenModal()}>Open Unfold Modal</button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(ModalAnimation.Reveal)}>
          Open Reveal Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(ModalAnimation.Uncover)}>
          Open Uncover Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(ModalAnimation.Flash)}>
          Open Flash Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(ModalAnimation.Sketch)}>
          Open Sketch Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(ModalAnimation.Slide)}>
          Open Slide Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(ModalAnimation.BlowUp)}>
          Open BlowUp Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.CloseModal()}>Close Modal</button>
      </AnimatedModalFrame>
    </>
  );
};

export const animatedModalTemplate = AnimatedModalTemplate.bind({});
