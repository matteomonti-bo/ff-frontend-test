import { FiltersType } from "../../models";
import styles from "./Filter.module.scss";

type FilterProps = {
  filterBy: FiltersType;
  values: string[];
  onFilterClick: (filter: string, value: string) => void;
};

const Filter = ({ filterBy, values, onFilterClick }: FilterProps) => {
  const handleClick = (filter: string, value: string) => {
    onFilterClick(filter, value);
  };
  const items = values.map((item) => (
    <button
      className={styles.filterValue}
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
