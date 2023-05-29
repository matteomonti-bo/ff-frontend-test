import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import ProductCard from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: "Components/Product/Card",
  component: ProductCard,
  tags: ['autodocs'],
  decorators: [
    withRouter
  ]
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    product: { "id": 1, "title": "iPhone 9", "description": "An apple mobile which is nothing like apple", "price": 549, "brand": "Apple", "category": "smartphones", "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg", "images": [] }
  }
}
