import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import qr from "../../assets/images/qr-code.png";
const JoinUs = () => {
  const { user, addStudent, setStudentData } = useContext(AuthContext);
  const MySwal = withReactContent(Swal);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const faculty = form.faculty.value;
    const year = form.year.value;
    const ukhemail = form.ukhemail.value;
    const phonenumber = form.phonenumber.value;
    const userData = {
      uid: user.uid,
      name: name,
      email: email,
      phonenumber: phonenumber,
      year: year,
      faculty: faculty,
      ukhemail: ukhemail,
      role: "user",
    };

    console.log("Inside the Join Function:", userData);
    setStudentData(userData);
    await addStudent();
    // e.target.reset();
    // MySwal.fire({
    //   title: "Congratulations",
    //   html: `<div>
    //           <img src=${qr} />
    //        </div>`,
    //   confirmButtonText: "Close",
    //   width: "30%",
    // });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Join now!</h1>
        </div>
        <div className="card-body flex items-center  w-full max-w-sm ">
          <form onSubmit={handleSubmit} className=" shadow-md">
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
                  placeholder={`${user.email}`}
                  readOnly
                />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="input input-bordered  input-sm w-full max-w-xs flex items-center gap-2 text-xs">
                Phone Number
                <input
                  type="text"
                  name="phonenumber"
                  className="grow"
                  placeholder="phone number"
                  required
                />
              </label>
            </div>
            <div className="divider divider-primary">University's Details</div>
            <div className="form-control mt-2">
              <label className="input input-bordered  input-sm w-full max-w-xs flex items-center gap-2 text-xs">
                Faculty
                <input
                  type="text"
                  name="faculty"
                  placeholder="faculty"
                  className="grow"
                  required
                />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="input input-bordered  input-sm w-full max-w-xs flex items-center gap-2 text-xs">
                Year of Studies
                <input
                  type="text"
                  name="year"
                  placeholder="UGI"
                  className="grow"
                  required
                />
              </label>
            </div>

            <div className="form-control mt-2">
              <label className="input input-bordered  input-sm w-full max-w-xs flex items-center gap-2 text-xs">
                UKH Email
                <input
                  type="email"
                  name="ukhemail"
                  placeholder="ukh email"
                  className="grow"
                />
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
              <ToastContainer></ToastContainer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
