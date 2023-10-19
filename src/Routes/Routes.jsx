import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/errorPage/Error";
import Home from "../Pages/homePage/Home";
import Login from "../Pages/loginPage/Login";
import AddProduct from "../Pages/addProductPage/AddProduct";

import MyCart from "../Pages/myCartPage/MyCart";
import Register from "../Pages/loginPage/Register";
import Private from "../privateRoute/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("brands.json"),
      },
      {
        path: "/addProduct",
        element: (
          <Private>
            <AddProduct></AddProduct>
          </Private>
        ),
      },
      {
        path: "/myCart",
        element: (
          <Private>
            <MyCart></MyCart>
          </Private>
        ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
