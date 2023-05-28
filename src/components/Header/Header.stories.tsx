import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { CartContext } from '../../context/cartContext';

import Header from  "./Header"

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
  tags: ['autodocs'],
  decorators: [
    withRouter,
    (Story, context) =>{
      const [itemsCount, setItemsCount] = useState(context.parameters.counter)
      return (
        <CartContext.Provider value={{itemsCount, setItemsCount}}>
          <Story />
        </CartContext.Provider>
      )
    }
  ],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Initial: Story = {
  parameters: {
    counter: 0
  }
}
export const CartNotEmpty: Story = {
  parameters: {
    counter: 2
  }
}
