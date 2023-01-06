import { Story } from '@storybook/react';
import { Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { AnimatedModal } from '../../components';

export default {
  title: 'Components/AnimatedModal',
  component: AnimatedModal
} as Meta;

// Create a master template for mapping args to render the Flexboard component
const AnimatedModalTemplate: Story = () => {
  return <AnimatedModal />;
};

export const animatedModalTemplate = AnimatedModalTemplate.bind({});
