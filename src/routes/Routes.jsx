import {
    createBrowserRouter,
    Navigate,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
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
            path:"category/:id",
            element: <h2></h2>
        }
      ],
    },
  ]);
  export default router;