import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-base-200">
          <div className="py-6 w-11/12 mx-auto ">
          <Navbar></Navbar>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default AuthLayout;