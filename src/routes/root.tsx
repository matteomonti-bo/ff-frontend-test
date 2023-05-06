import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>hello world!</div>
       <Outlet />
    </>
  )
}

export default Root;
