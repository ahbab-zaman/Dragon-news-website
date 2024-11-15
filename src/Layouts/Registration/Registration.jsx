import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Registration = () => {
  const { createUser, setUser, updatedProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updatedProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            setUser(err);
          });
      })
      .catch((error) => {
        setUser(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content w-3/5">
          <div className="card bg-base-100 w-full  rounded-none shadow-2xl py-6">
            <h2 className="text-3xl text-center font-semibold">
              Register your account
            </h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Your Name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="input rounded-sm bg-base-200"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Photo URL
                  </span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter your URL"
                  className="input rounded-sm bg-base-200"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Email Address
                  </span>
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
                  <span className="label-text text-lg font-semibold">
                    Create Password
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="input bg-base-200 rounded-sm"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#403F3F] font-semibold text-white text-lg rounded-sm">
                  Registration
                </button>
              </div>

              <div className="py-2">
                <p className="text-center font-semibold">
                  Already Have An Account?{" "}
                  <Link className="text-red-500" to="/auth/login">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
