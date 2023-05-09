import { useState } from "react";
import classNames from 'classnames';
import Filter from "../Filter";
import { IProduct, FiltersType } from "../../models";
import { getDistinctValues } from "../../services/products";
import styles from "./FilterBar.module.scss"


type ProductListProps = {
  products: IProduct[];
  onInputChange: (name:string, value: string) => void;
};

const FilterBar = ({ products, onInputChange }: ProductListProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true)

  const handleClick = () => {
    setCollapsed(prevState => !prevState)
  }

  // recupero i valori distinti di category e brand - ai fini della prova prendo solo i primi 3 valori
  const categories = getDistinctValues(products, FiltersType.Category).slice(0, 3);
  const brand = getDistinctValues(products, FiltersType.Brand).slice(0, 3);

  return (
    <div className={styles.filterBar}>
      <button className={classNames('accordionBtn', {collapsed})} onClick={handleClick}>FILTRI</button>
      <div className={classNames('filterWrapper', {open: !collapsed})}>
        <Filter filterBy={FiltersType.Category} values={categories} onFilterClick={onInputChange}/>
        <Filter filterBy={FiltersType.Brand} values={brand} onFilterClick={onInputChange}/>
      </div>
    </div>
  )
}

export default FilterBar;
