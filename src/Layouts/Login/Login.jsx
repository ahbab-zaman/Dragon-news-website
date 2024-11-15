import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({})
    console.log(location)
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userLogin(email, password)
        .then(result => {
            const user = result.user;
            setUser(user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(err => {
            setError({...err, login: err.code})
            console.log(err.message)
        })


    }
    

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-3/5">
          <div className="card bg-base-100 w-full  rounded-none shadow-2xl py-6">
            <h2 className="text-3xl text-center font-semibold">Login your account</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Email Address</span>
                </label>
                <input
                name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="input rounded-sm bg-base-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input bg-base-200 rounded-sm"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {
                error.login && <p className="text-red-600">{error.login}</p>
              }
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] font-semibold text-white text-lg rounded-sm">Login</button>
              </div>

              <div className="py-2">
                <p className="text-center font-semibold">Don't Have An Account? <Link className="text-red-500" to="/auth/registration">Registration</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
