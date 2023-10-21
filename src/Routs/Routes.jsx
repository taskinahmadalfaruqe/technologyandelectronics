import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddProduct from "../Pages/AddProduct/AddProduct";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import LOdeDataByCatagory from "../Pages/LodeDataByCatagory/LOdeDataByCatagory";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import PrivetRout from "./PrivetRout/PrivetRout";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element: <HomePage></HomePage>,
            loader: ()=>fetch("https://technology-server-three.vercel.app/allProduct"),
        },
        {
            path:'/myCart',
            element: <PrivetRout><MyCart></MyCart></PrivetRout>,
            loader: ()=> fetch("https://technology-server-three.vercel.app/cartProduct"),
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/signup',
            element: <SignUp></SignUp>
        },
        {
            path:'/addProduct',
            element: <PrivetRout><AddProduct></AddProduct></PrivetRout>
        },
        {
            path:'/productDetails/:id',
            element: <PrivetRout><ProductDetails></ProductDetails></PrivetRout>,
            loader: ()=>fetch("https://technology-server-three.vercel.app/allProduct"),
        },
        {
            path:'updateProduct/:id',
            element: <PrivetRout><UpdateProduct></UpdateProduct></PrivetRout>,
            loader: ({params})=> fetch(`https://technology-server-three.vercel.app/allProduct/${params.id}`)
        },
        {
            path:'/lodeDataByCatagory/:catagory',
            element: <LOdeDataByCatagory></LOdeDataByCatagory>,
            loader: ()=>fetch("https://technology-server-three.vercel.app/allProduct"),
        },
      ]
    },
  ]);
  export default Routes;