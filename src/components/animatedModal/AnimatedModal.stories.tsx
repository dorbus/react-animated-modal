import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import React, { useRef } from 'react';

import {
  AnimatedModal,
  AnimatedModalObject,
  AnimatedModalFrame,
  Unfold,
  Reveal,
  Uncover,
  Flash,
  Sketch,
  Slide,
  BlowUp
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
      <AnimatedModal ref={ref} animation={new Unfold()} />
      <AnimatedModalFrame>
        <button onClick={() => ref.current?.OpenModal()}>Open Unfold Modal</button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(Reveal.animationName)}>
          Open Reveal Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(Uncover.animationName)}>
          Open Uncover Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(Flash.animationName)}>
          Open Flash Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(Sketch.animationName)}>
          Open Sketch Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(Slide.animationName)}>
          Open Slide Modal
        </button>
        <br />
        <br />
        <button onClick={() => ref.current?.OpenModal(BlowUp.animationName)}>
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
