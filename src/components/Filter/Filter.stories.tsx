import type { Meta, StoryObj } from '@storybook/react';

import Filter from './Filter';
import { FiltersType } from '../../models';

const meta: Meta<typeof Filter> = {
  title: "Components/Filters/Filter",
  component: Filter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Category: Story = {
  args:{
    filterBy: FiltersType.Category,
    values: ["SMARTHPHONE", "PC", "fragrances"]
  }
}
export const Brand: Story = {
  args:{
    filterBy: FiltersType.Brand,
    values: ["Apple", "Oppo", "Motorola"]
  }
}
