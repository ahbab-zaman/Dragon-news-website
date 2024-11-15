import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userLogo from "../../assets/user.png"
import { AuthContext } from "../../Layouts/AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, userLogout} = useContext(AuthContext)
  return (
    <div>
      <nav className="flex justify-between">
        <div>{user &&  user.email}</div>
        <ul className="space-x-4 flex">
          <div >
            <NavLink className={({isActive}) => isActive ? "bg-slate-600 text-white p-2 rounded-md font-semibold" : "bg-transparent"} to="/">Home</NavLink>
          </div>
          <div>
            {" "}
            <NavLink className={({isActive}) => isActive ? "bg-slate-600 text-white p-2 rounded-md" : "bg-transparent"} to="/about">About</NavLink>
          </div>
          <div>
            <NavLink className={({isActive}) => isActive ? "bg-slate-600 text-white p-2 rounded-md" : "bg-transparent"} to="/career">Career</NavLink>
          </div>
        </ul>
        <div className="flex items-center space-x-2">

        {
          user && user?.email ?  
          <div> 
            <img src={user?.photoURL} alt="" />
            <p>{user?.displayName}</p>
          </div>
           : <img src={userLogo} alt="" />
        }

            <div>
              {
                user && user.email ? <Link to="/auth/login"
                onClick={userLogout} className="text-white font-semibold px-4 py-2 bg-[#403F3F]">Logout</Link> : <Link to="/auth/login" className="text-white font-semibold px-4 py-2 bg-[#403F3F]">Login</Link>
              }
              </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
