import type { Meta, StoryObj } from "@storybook/react";

import ProductDetail from "./ProductDetail";

const meta: Meta<typeof ProductDetail> = {
  title: "Components/Product/Detail",
  component: ProductDetail,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductDetail>;

export const Default: Story = {
  args: {
    product: {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      rating: 4.69,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
  },
};
