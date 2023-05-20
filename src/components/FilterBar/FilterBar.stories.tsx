import type { Meta, StoryObj } from '@storybook/react';

import FilterBar from './FilterBar';

const meta: Meta<typeof FilterBar> = {
  title: "Components/Filters/FilterBar",
  component: FilterBar,
  tags: ['autodocs'],
  render: (args, { loaded: { products } }) => <FilterBar {...args} {...products} />,
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  loaders: [
    async () => ({
      products: await (await fetch('https://dummyjson.com/products?limit=10')).json(),
    })
  ],
}
