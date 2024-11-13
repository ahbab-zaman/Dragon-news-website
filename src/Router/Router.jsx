import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import About from "../Layouts/About/About";
import Career from "../Layouts/Career/Career";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path:"/about",
        element:<About></About>
    },
    {
        path:"/career",
        element:<Career></Career>
    }
])

export default router;