import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from 'storybook-addon-react-router-v6';

import ProductList from "./ProductList";
import { productLiteList } from "../../mocks/products";

const meta: Meta<typeof ProductList> = {
  title: "Components/Product/List",
  component: ProductList,
  tags: ["autodocs"],
  decorators: [
    withRouter
  ]
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const NoProduct: Story = {
  args: {
    products: []
  }
}

export const AllProducts: Story = {
  args: {
    products: productLiteList,
    filterValues: { category: "", brand: ""}
  }
}

export const FilteredProducts: Story = {
  args: {
    products: productLiteList,
    filterValues: { category: "", brand: "apple"}
  }
}
