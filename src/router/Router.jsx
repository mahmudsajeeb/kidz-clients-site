import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../component/pages/Home";
import Blog from "../component/pages/Blog";

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