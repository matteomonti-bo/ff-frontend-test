import type { Meta, StoryObj } from '@storybook/react';

import BreadCrumb from  "./BreadCrumb"

const meta: Meta<typeof BreadCrumb> = {
  component: BreadCrumb,
};

export default meta;
type Story = StoryObj<typeof BreadCrumb>;

export const Primary: Story = {
  args:{
    category: "CATEGORY",
    title: "PRODUCT TITLE"
  }
}
