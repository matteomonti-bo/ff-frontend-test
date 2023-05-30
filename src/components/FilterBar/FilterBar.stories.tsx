import type { Meta, StoryObj } from '@storybook/react';

import FilterBar from './FilterBar';
import { FiltersType } from '../../models';

const meta: Meta<typeof FilterBar> = {
  title: "Components/Filters/FilterBar",
  component: FilterBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  args:{
    filters: {category: ["cat 1", "cat 2"], brand: ["brand 1", "brand 2"]}
  }
}

