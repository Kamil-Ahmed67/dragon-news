import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      }
    ],
  },
  {
     path:"/news/:id",
     element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
     loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path:"auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      }
    ]

  }
]);
export default router;