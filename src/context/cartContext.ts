import { createContext } from "react";

type cartContextType = {
  itemsCount: number;
  setItemsCount: (count: number) => void
}

const CartContext = createContext<cartContextType>({itemsCount: 0, setItemsCount: () => {}})

export {CartContext}
