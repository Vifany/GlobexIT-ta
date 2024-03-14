import type { Meta, StoryObj } from '@storybook/react';

import SearchButton from './search-button';

const meta: Meta<typeof SearchButton> = {
  component: SearchButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SearchButton>;

export const Solo: Story = {
  args: 	{
    onClick: () => console.log('Clicked'),
},
};