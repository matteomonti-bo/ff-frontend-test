import { FiltersType } from "../../models";

type FilterProps = {
  filterBy: FiltersType;
  values: string[];
  onFilterClick: (filter: string, value:string) => void;
}

const Filter = ({filterBy, values, onFilterClick}: FilterProps) => {
  const handleClick = (filter: string, value:string) => {
    onFilterClick(filter, value);
  }
  const items = values.map((item) => <button key={item} onClick={() => handleClick(filterBy, item)}>{item}</button>)

  return (
    <div>
      <span>{filterBy}</span>
      {items}
    </div>
  )
}

export default Filter;
