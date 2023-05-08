import { IProduct, FiltersType, FilterFields } from "../../models";
import { useState } from "react";
import { getDistinctValues } from "../../services/products";
import classNames from 'classnames';
import styles from "./FilterBar.module.scss"


type ProductListProps = {
  products: IProduct[];
  filterValues: FilterFields;
  onInputChange: (name:string, value: string) => void;
};

const FilterBar = ({ products, filterValues, onInputChange }: ProductListProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const handleClick = () => {
    setCollapsed(prevState => !prevState)
  }

  const categories = getDistinctValues(products, FiltersType.Category);
  const brand = getDistinctValues(products, FiltersType.Brand);

  return (
    <div className={styles.filterBar}>
      <button className={classNames('accordionBtn', {collapsed})} onClick={handleClick}>FILTRI</button>
      <div className={classNames('filterWrapper', {open: !collapsed})}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  )
}

export default FilterBar;
