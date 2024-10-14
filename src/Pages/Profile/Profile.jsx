import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaUser, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail, MdAttachEmail } from "react-icons/md";
import { SiOpslevel } from "react-icons/si";
import { BsFillSignIntersectionFill } from "react-icons/bs";
const Profile = () => {
  const { profileData, user } = useContext(AuthContext);
  const { name, year, ukhemail, faculty } = profileData;
  return (
    <div className="min-h-screen">
      <div className="divider divider-primary text-center font-semibold text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
        Profile
      </div>
      <div>
        <h1 className="flex items-center gap-1 text-xs md:text-base">
          <FaUser></FaUser> Name: {name}
        </h1>
        <h1 className="flex items-center gap-1 text-xs md:text-base">
          <MdEmail></MdEmail>Email: {user.email}
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
      </div>
    </div>
  );
};

export default Profile;
