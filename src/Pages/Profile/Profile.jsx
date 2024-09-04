import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUser, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail, MdAttachEmail } from "react-icons/md";
import { SiOpslevel } from "react-icons/si";
import { BsFillSignIntersectionFill } from "react-icons/bs";
const Profile = () => {
  const { profileData, countDownDate } = useContext(AuthContext);
  const { email, name, phonenumber, year, ukhemail, faculty } = profileData;
  return (
    <div>
      <div className="divider divider-primary text-center font-semibold text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
        Profile
      </div>
      <div>
        <h1 className="flex items-center gap-1 text-xs md:text-base">
          <FaUser></FaUser> Name: {name}
        </h1>
        <h1 className="flex items-center gap-1 text-xs md:text-base">
          <MdEmail></MdEmail>Email: {email}
        </h1>
        <h1 className="flex items-center gap-1 text-xs md:text-base">
          <SiOpslevel></SiOpslevel>Year: {year}
        </h1>
        <h1 className="flex items-center gap-1 text-xs md:text-base">
          <BsFillSignIntersectionFill></BsFillSignIntersectionFill>Faculty:
          {faculty}
        </h1>
        <h1 className="flex items-center gap-1 text-xs md:text-base">
          <MdAttachEmail></MdAttachEmail>UKH Email: {ukhemail}
        </h1>
        <h1 className="flex items-center gap-1 text-xs md:text-base">
          <FaPhoneSquareAlt></FaPhoneSquareAlt>Phone Number: {phonenumber}
        </h1>
      </div>
      {countDownDate === null ? (
        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl text-center text-[#7c8deb] font-bold mt-4">
            Weekly Contest scores
          </h1>
          <ol className="mt-4">
            <li>1.{localStorage.getItem("firstscores")}/100</li>
            <li>2.{localStorage.getItem("secondscores")}/200</li>
            <li>3.{localStorage.getItem("thirdscores")}/300</li>
            <li>4.{localStorage.getItem("forthscores")}/400</li>
          </ol>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Profile;
