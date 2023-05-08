import { FiltersType } from "../../models";

type FilterProps = {
  filterBy: FiltersType,
  values: string[]
}

const Filter = ({filterBy, values}: FilterProps) => {
  const items = values.map((item) => <button key={item}>{item}</button>)
  return (
    <div>
      <span>{filterBy}</span>
      {items}
    </div>
  )
}

export default Filter;
