import type { Meta, StoryObj } from '@storybook/react';

import CloseButton from './close-button';

const meta: Meta<typeof CloseButton> = {
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Solo: Story = {
  args: 	{
    onClick: () => console.log('Clicked'),
},
};