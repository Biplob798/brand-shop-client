import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../Pages/errorPage/Error";
import Home from "../Pages/homePage/Home";
import Login from "../Pages/loginPage/Login";
import AddProduct from "../Pages/addProductPage/AddProduct";

import Register from "../Pages/loginPage/Register";
import Private from "../privateRoute/Private";
import UpdateProduct from "../Pages/updateProductPage/UpdateProduct";
import BrandProduct from "../Components/brandProduct/BrandProduct";
import ViewDetails from "../Pages/viewDetails/ViewDetails";
import MyCart from "../Pages/myCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/product"),
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
        path: "/updateProduct/:_id",
        element: (
          <Private>
            <UpdateProduct></UpdateProduct>
          </Private>
        ),
        loader: () => fetch("http://localhost:5000/product"),
      },

      {
        path: "/cart",

        element: (
          <Private>
            <MyCart></MyCart>
          </Private>
        ),

        loader: () => fetch("http://localhost:5000/cart"),
      },

      {
        path: "/brandProduct/:brand",
        element: (
          <Private>
            <BrandProduct></BrandProduct>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.brand}`),
      },

      {
        path: "/viewDetails/:_id",
        element: (
          <Private>
            {" "}
            <ViewDetails></ViewDetails>
          </Private>
        ),
        loader: () => fetch("http://localhost:5000/product"),
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
