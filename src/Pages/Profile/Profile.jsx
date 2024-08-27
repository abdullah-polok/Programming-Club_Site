import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUser, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail, MdAttachEmail } from "react-icons/md";
import { SiOpslevel } from "react-icons/si";
import { BsFillSignIntersectionFill } from "react-icons/bs";
const Profile = () => {
  const { profileData } = useContext(AuthContext);
  console.log("Profile inside:", profileData);
  const { email, name, phonenuumber, year, ukhemail, department } = profileData;
  return (
    <div>
      <div className="divider divider-primary text-center font-semibold text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
        Profile
      </div>
      <div>
        <h1 className="flex items-center gap-1">
          <FaUser></FaUser> Name: {name}
        </h1>
        <h1 className="flex items-center gap-1">
          <MdEmail></MdEmail>Email: {email}
        </h1>
        <h1 className="flex items-center gap-1">
          <SiOpslevel></SiOpslevel>Year: {year}
        </h1>
        <h1 className="flex items-center gap-1">
          <BsFillSignIntersectionFill></BsFillSignIntersectionFill>Deparment:
          {department}
        </h1>
        <h1 className="flex items-center gap-1">
          <MdAttachEmail></MdAttachEmail>UKH Email: {ukhemail}
        </h1>
        <h1 className="flex items-center gap-1">
          <FaPhoneSquareAlt></FaPhoneSquareAlt>Phone Number: {phonenuumber}
        </h1>
      </div>
    </div>
  );
};

export default Profile;
