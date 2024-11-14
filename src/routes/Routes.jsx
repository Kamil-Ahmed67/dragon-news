import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CategoryNews from "../pages/CategoryNews";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
         path:"",
         element:<Navigate to={"/category/01"}></Navigate> 
        },
        {
            path:"/category/:id",
            element: <CategoryNews></CategoryNews>,
            loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        }
      ],
    },
  ]);
  export default router;