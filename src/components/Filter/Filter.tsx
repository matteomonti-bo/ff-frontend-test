import classNames from "classnames";
import { useState } from "react";
import { FiltersType } from "../../models";
import styles from "./Filter.module.scss";

type FilterProps = {
  filterBy: FiltersType;
  values: string[];
  onFilterClick: (filter: string, value: string) => void;
};

const Filter = ({ filterBy, values, onFilterClick }: FilterProps) => {
  const [currentFilter, setCurrentFilter] = useState("")
  const handleClick = (filter: string, value: string) => {
    setCurrentFilter(value);
    onFilterClick(filter, value);
  };

  const items = values.map((item) => (
    <button
      className={classNames(styles.filterValue, {selected: currentFilter === item} )}
      key={item}
      onClick={() => handleClick(filterBy, item)}
    >
      {item}
    </button>
  ));

  return (
    <div className={styles.filter}>
      <span className={styles.filterLabel}>{filterBy}</span>
      {items}
    </div>
  );
};

export default Filter;
