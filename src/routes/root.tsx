import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default Root;
