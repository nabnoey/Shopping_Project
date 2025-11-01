import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([

{
path:"/",
element:<MainLayout />,
children: [

  {
    path: "/",
    element: <Home />,
  },


]},

{
    path:"/login",
    element:<Login/>
}




])

export default router