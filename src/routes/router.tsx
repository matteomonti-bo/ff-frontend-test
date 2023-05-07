import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";

const Error404 = lazy(() => import("../pages/error404"));
const HomePage = lazy(() => import("../pages/home"));
const ProductPage = lazy(() => import("../pages/product"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "product/:productId", element: <ProductPage /> },
    ],
  },
]);

export default router;
