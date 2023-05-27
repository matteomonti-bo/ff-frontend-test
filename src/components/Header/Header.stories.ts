import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import Header from  "./Header"

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ['autodocs'],
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {}