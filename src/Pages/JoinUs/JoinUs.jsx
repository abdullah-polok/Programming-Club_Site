import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import qr from "../../assets/images/qr-code.png";
import { Link, useNavigate } from "react-router-dom";
const JoinUs = () => {
  const { user, addStudent, profileData } = useContext(AuthContext);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  // console.log("Profile Data join us",);
  const profileLength = Object.keys(profileData).length;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    // const email = user?.email;
    const faculty = form.faculty.value;
    const year = form.year.value;
    const ukhemail = form.ukhemail.value;
    // const phonenumber = form.phonenumber.value;
    const userData = {
      uid: user.uid,
      name: name,
      year: year,
      faculty: faculty,
      ukhemail: ukhemail,
    };
    // role: "user",
    console.log("Inside the Join Function:", userData);
    // setStudentData(userData);
    addStudent(userData);
    e.target.reset();

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const handleScan = () => {
    MySwal.fire({
      html: `<div>
      <h1 className="text-xs md:text-lg lg:text-xl text-primary">Congratulations</h1>
              <img className="w-full" src=${qr} />
           </div>`,
      confirmButtonText: "Close",
      width: "50%",
    });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-3xl  lg:text-5xl font-bold text-[#7c8deb]">
            Join now
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-4">
          <form onSubmit={handleSubmit} className=" shadow-md">
            <div className="divider divider-primary">University's Details</div>
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
            {/* <div className="form-control mt-2">
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
            </div> */}
            {/* <div className="form-control mt-2">
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
            </div> */}
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
              {/* <h1
                hidden={profileLength ? true : false}
                className="text-red-600 text-center font-bold mb-2"
              >
                Click two times on submit button
              </h1> */}
              <button
                disabled={profileLength ? true : false}
                className="btn btn-primary"
              >
                Submit
              </button>
              <ToastContainer></ToastContainer>
            </div>
          </form>
          <button
            onClick={handleScan}
            disabled={profileLength ? false : true}
            className="btn btn-primary w-full mt-2"
          >
            Scan
          </button>
          <div className="text-center mt-4">
            <Link to="/" className="text-primary font-semibold">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

///disable button technique
{
  /* <button disabled={profileData} className="btn btn-primary">
Submit
</button> */
}
