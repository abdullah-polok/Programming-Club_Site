import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const [loginMes, setLoginMes] = useState("");
  const userInfo = useContext(AuthContext);
  const { signInUser, loginUserPop } = userInfo;

  const navigate = useNavigate();

  // const handlePopUp = () => {
  //   loginUserPop()
  //     .then((user) => {
  //       console.log(user.user);
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //       setLoginMes(() => {
  //         return err.message;
  //       });
  //     });
  // };

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#7c8deb]">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#7c8deb] text-white text-lg">
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-between px-8 py-10">
            {/* <button
              onClick={handlePopUp}
              className="btn w-full bg-red-400 text-white"
            >
              Sign in with Google
            </button> */}
          </div>
          <div className="text-center pb-5">
            <Link to="/register" className="text-xl text-[#7c8deb]">
              Create An Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
