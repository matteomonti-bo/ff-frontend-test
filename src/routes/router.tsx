import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import { getProducts, getProduct } from "../services/products";

const Error404 = lazy(() => import("../pages/error404"));
const HomePage = lazy(() => import("../pages/home"));
const ProductPage = lazy(() => import("../pages/product"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: getProducts },
      {
        path: "product/:productId",
        element: <ProductPage />,
        loader: ({ params }) => {
          return getProduct(params.productId);
        },
      },
    ],
  },
]);

export default router;
