import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);

  const handleReset = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;

    resetPassword(email)
      .then((res) => {
        console.log(res.user);
        toast("Password reset successfully");
        e.target.reset();
      })
      .catch((err) => {
        // console.log(err.message);
      });
  };
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl  lg:text-5xl font-bold text-[#7c8deb]">
            Reset your password
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-slate-400 shadow-md">
          <form onSubmit={handleReset} className="card-body">
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
            <div className="form-control mt-6">
              <button className="btn bg-[#7c8deb] text-white text-lg">
                Reset Password
              </button>
              <ToastContainer></ToastContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
