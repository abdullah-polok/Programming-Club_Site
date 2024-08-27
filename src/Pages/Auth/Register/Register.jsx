import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const userInfo = useContext(AuthContext);
  const { createUser, user } = userInfo;
  const navigate = useNavigate();

  // const addUser = async () => {};
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    ///Check password length
    if (password.length < 6) {
      setRegisterError(() => {
        toast("Password should be at least six character or longer");
        return "Password should be at least six character or longer";
      });
      return;
    }
    // ///check password have any capital letter or not
    if (!/[A-Z]/.test(password)) {
      setRegisterError(() => {
        toast("Password should have at least one upper case letter");
        return "Password should have at least one upper case letter";
      });

      return;
    }
    // ///check password have any special character or not
    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      setRegisterError(() => {
        toast("Password should have at least one special character");
        return "Password should have at least one special character";
      });

      return;
    }

    if (password !== confirmPassword) {
      setRegisterError(() => {
        toast("Password not match");
        return "Password not match";
      });
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast("Create user successfully");

        //Reset login form
        e.target.reset();

        ///Navigate to Home
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setRegisterError(err.message);
        toast(err.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card-body flex items-center  w-full max-w-sm ">
          <form onSubmit={handleRegister} className=" shadow-md">
            <div className="form-control">
              <label className="input input-bordered  input-sm w-full max-w-xs flex items-center gap-2 text-xs">
                Full Name
                <input
                  type="text"
                  className="grow"
                  placeholder="name"
                  name="name"
                  required
                />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="input input-bordered  input-sm w-full max-w-xs flex items-center gap-2 text-xs">
                Email
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="email"
                  required
                />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="input input-bordered  input-sm w-full max-w-xs flex items-center gap-2 text-xs">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="grow"
                  required
                />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="input input-bordered  input-sm w-full max-w-xs flex items-center gap-2 text-xs">
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  className="grow"
                  placeholder="confirm password"
                  required
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              <ToastContainer></ToastContainer>
            </div>
          </form>

          <p className="p-5">
            Have a account?
            <Link to={"/login"} className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
