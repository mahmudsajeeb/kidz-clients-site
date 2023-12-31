import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main"; 
import Blog from "../component/pages/Blog";
import Home from "../component/pages/Home/Home";
import SignIn from "../component/SignIn/SignIn";
import Login from "../component/Login/Login";
import AddToy from "../component/pages/AddToy/AddToy";
import MyToys from "../component/pages/MyToys/MyToys";
import AllToys from "../component/pages/All Toys/AllToys";
import ErrorPage from "../component/ErrorPage";
import UpdateToys from "../component/pages/MyToys/UpdateToys"; 
import Toys from "../component/pages/ToysDetails/Toys";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<Main />,
    errorElement:<ErrorPage />,
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
        path:"alltoys",
        element:<AllToys />
      },
      {
        path:"addtoy",
        element:<AddToy />
      },
      {
        path:"mytoys",
        element:<MyToys />
      },
      {
        path:"toy/:id",
        element: <PrivateRoute ><Toys /></PrivateRoute> ,
        loader:({params})=>fetch(`https://toys-murex.vercel.app/alltoys/${params.id}`)

      },
       
      {
        path:"updatetoys/:id",
        element:<UpdateToys />,
        loader:({params})=>fetch(`https://toys-murex.vercel.app/alltoys/${params.id}`)
       

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