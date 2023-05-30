import { useState } from "react";
import classNames from "classnames";
import Filter from "../Filter";
import { Filters, FiltersType } from "../../models";
import styles from "./FilterBar.module.scss";

type ProductListProps = {
  filters: Filters;
  onInputChange: (name: string, value: string) => void;
};

const FilterBar = ({ filters, onInputChange }: ProductListProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const filterItem = Object.keys(filters).map((filter) => (
    <Filter
      key={filter}
      filterBy={filter as FiltersType}
      values={filters[filter as keyof typeof filters]}
      onFilterClick={onInputChange}
    />
  ));

  const handleClick = () => {
    setCollapsed((prevState) => !prevState);
  };

  return !filters ? null : (
    <div className={styles.filterBar}>
      <button
        className={classNames("accordionBtn", { collapsed })}
        onClick={handleClick}
      >
        FILTRI
      </button>
      <div className={classNames("filterWrapper", { open: !collapsed })}>
        {filterItem}
      </div>
    </div>
  );
};

export default FilterBar;
