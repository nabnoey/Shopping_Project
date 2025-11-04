import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from "./router/index.jsx"
<<<<<<< HEAD
=======

>>>>>>> Feature/clothing-category-page


createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <RouterProvider router={router} />
=======
 <RouterProvider router={router}/>
>>>>>>> Feature/clothing-category-page
  </StrictMode>,

)