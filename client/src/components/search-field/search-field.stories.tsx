import type { Meta, StoryObj } from '@storybook/react';
import SearchField from './search-field';

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof SearchField>;

export const Solo: Story = {
  args: {
    onChange: (e) => console.log(e.target.value),
  },
};