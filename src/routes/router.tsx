import { createBrowserRouter } from "react-router-dom";
import {Root, HomePage, ProductPage, Error404} from "./index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <HomePage />},
      { path: "product/:productId", element: <ProductPage />},
    ],
  },
]);

export default router;
