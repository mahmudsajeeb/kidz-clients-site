import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"; 
import Blog from "../component/pages/Blog";
import Home from "../component/pages/Home/Home";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<Main />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"blog",
        element:<Blog />
      }
    ]
  }
])