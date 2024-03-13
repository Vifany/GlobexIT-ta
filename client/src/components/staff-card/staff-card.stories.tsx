import type { Meta, StoryObj } from '@storybook/react';

import StaffCard from './staff-card';

const meta: Meta<typeof StaffCard> = {
  component: StaffCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof StaffCard>;

export const Text: Story = {
  args: {
    name: 'Евгения Савченко',
    phone: '+7 (999) 999-99-99',
    email: 'yysavchenk@yandex.ru',
  },
};