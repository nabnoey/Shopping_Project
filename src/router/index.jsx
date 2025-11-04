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
import OversizeWoman from "../Category/Woman/oversize-shirt.jsx";
import PantsWoman from "../Category/Woman/pants.jsx";
import CropWoman from "../Category/Woman/crop.jsx";
import SweaterWoman from "../Category/Woman/sweater.jsx";
import PoloShirtWoman from "../Category/Woman/poloShirt.jsx";

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
    path:"/category/kids",
    element:<ShirtKids />
  },

  {
    path:"/category/oversize-shirt-woman",
    element:<OversizeWoman />
  },

  {
    path:"/category/pants-woman",
    element:<PantsWoman />
  },

{
    path:"/category/crop-top-woman",
    element:<CropWoman />
  },

  {
    path:"/category/sweater-woman",
    element:<SweaterWoman />
  },

  {
    path:"/category/polo-shirt-woman",
    element:<PoloShirtWoman />
  },

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