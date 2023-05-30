import type { Meta, StoryObj } from '@storybook/react';

import ErrorMessage from './ErrorMessage';

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Plain: Story = {
  args: {
    children: "Plain error message"
  }
}

export const Html: Story = {
  args: {
    children: <span style={{fontWeight: "500", color: "red"}}>HTML Error Message</span>
  }
}
