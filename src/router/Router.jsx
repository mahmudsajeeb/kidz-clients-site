import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"; 
import Blog from "../component/pages/Blog";
import Home from "../component/pages/Home/Home";
import SignIn from "../component/SignIn/SignIn";
import Login from "../component/Login/Login";

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
      },
      {
        path:"signin",
        element:<SignIn />
      },
      {
        path:"login",
        element:<Login />
      }
    ]
  }
])