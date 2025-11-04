import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../layouts/MainLayout";
import PoloShirt from "../Category/Men/PoloShirt.jsx";
import Oversize from "../Category/Men/oversize-shirt.jsx";
import Sweater from "../Category/Men/sweaterShirt.jsx";
import Pants from "../Category/Men/pants.jsx";
import ShirtKids from "../Category/Kids/ShirtKids.jsx";
import PantsKids from "../Category/Kids/PantsKids.jsx";
import SweaterKids from "../Category/Kids/SweaterKids.jsx";
import SetKids from "../Category/Kids/SetKids.jsx";
import DressKids from "../Category/Kids/DressKids.jsx";
const router = createBrowserRouter([

{
path:"/",
element:<MainLayout />,
children: [

  {
    path: "/",
    element: <Home />,
  },

  {
    path:"/category/polo-shirt",
    element:<PoloShirt />
  },

  {
    path:"/category/oversize-shirt",
    element:<Oversize />
  },

  {
    path:"/category/sweater",
    element:<Sweater />
  },

  {
    path:"/category/pants",
    element:<Pants />
  },

  {
    path:"/category/kids-tshirt",
    element:<ShirtKids />
  },

  {
    path:"/category/kids-pants",
    element:<PantsKids />
  },

  {
    path:"/category/kids-set",
    element:<SetKids />
  },

  {
    path:"/category/kids-dress",
    element:<DressKids />
  },

  {
    path:"/category/kids-sweater",
    element:<SweaterKids />
  }


]},

{
    path:"/login",
    element:<Login/>
},

{
  path:"/register",
  element:<Register />
}




])

export default router