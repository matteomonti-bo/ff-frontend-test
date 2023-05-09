import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import Header from "../components/Header";

const Root = () => {
  const [itemsCount, setItemsCount] = useState(0)
  return (
    <CartContext.Provider value={{itemsCount, setItemsCount}}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </CartContext.Provider>
  )
}

export default Root;
