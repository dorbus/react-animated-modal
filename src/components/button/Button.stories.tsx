import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Button from './Button';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

function onClick() {
  console.log('Button clicked');
}

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary 😃',
  onClick: onClick
};

export const Secondary = Template.bind({});
Secondary.args = { label: 'Secondary 😇', onClick: onClick };
