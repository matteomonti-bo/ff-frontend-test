import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import ProductCard from './ProductCard';
import { singleLiteProduct } from '../../mocks/products';

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
    product: singleLiteProduct
  }
}
