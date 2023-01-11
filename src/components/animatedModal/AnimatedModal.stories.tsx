import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import React, { useRef } from 'react';

import { AnimatedModal, Animation } from '../../components';
import { AnimatedModalObject } from './AnimatedModal';

export default {
  title: 'Components/AnimatedModal',
  component: AnimatedModal
} as Meta;

// Create a master template for mapping args to render the Flexboard component
const AnimatedModalTemplate: Story = () => {
  const ref = useRef<AnimatedModalObject>(null);

  function onButtonClick() {
    console.log('Button Clicked');
    console.log('=>', ref);
    console.log('=>', ref.current);
    console.log('=>', ref.current?.OpenModal);
    ref.current?.OpenModal();
  }

  return (
    <button onClick={onButtonClick}>
      <AnimatedModal ref={ref} animation={Animation.Unfold} />
    </button>
  );
};

export const animatedModalTemplate = AnimatedModalTemplate.bind({});
