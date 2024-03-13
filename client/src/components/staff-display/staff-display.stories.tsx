import type { Meta, StoryObj } from '@storybook/react';

import StaffDisplay from './staff-display';

const meta: Meta<typeof StaffDisplay> = {
  component: StaffDisplay,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof StaffDisplay>;

export const Text: Story = {
  args: 	{
    data: {
      name: "Ezra Mcleod",
      phone: "(937) 667-5653",
      email: "lacinia@protonmail.org",
      address: "P.O. Box 273, 6187 Suspendisse Road",
      positionName: "lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id,",
      department: "mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam",
      hireDate: "Jan 14, 2021"
    }
},
};