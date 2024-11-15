import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import About from "../Layouts/About/About";
import Career from "../Layouts/Career/Career";
import "../index.css";
import NewsPage from "../Pages/NewsPage";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Login from "../Layouts/Login/Login";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Registration from "../Layouts/Registration/Registration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/01"></Navigate>,
      },
      {
        path: "/category/:id",
        element: <NewsPage></NewsPage>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/career",
    element: <Career></Career>,
  },
  {
    path: "/card/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
