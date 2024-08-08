import React from "react";
import { motion } from "framer-motion";
import im1 from "../../assets/images/FtxoW4YWYAAQQIb.jpg";
import im2 from "../../assets/images/Google-Hashcode-Competition-UKH-1-1024x683.jpg";
import im3 from "../../assets/images/Google-Hashcode-Competition-UKH-10-1024x683.jpg";
import im4 from "../../assets/images/Google-Hashcode-Competition-UKH-2.jpg";
import im5 from "../../assets/images/Google-Hashcode-Competition-UKH-4-1024x683.jpg";
import im6 from "../../assets/images/Google-Hashcode-Competition-UKH-7-1024x683.jpg";
import im7 from "../../assets/images/Google-Hashcode-Competition-UKH-10-1024x683.jpg";
import im8 from "../../assets/images/Google-Hashcode-Competition-UKH-2.jpg";
import im9 from "../../assets/images/Google-Hashcode-Competition-UKH-4-1024x683.jpg";

const images = [im1, im2, im3, im4, im5, im6, im7, im8, im9];

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const Gallery = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center ">
        {images.map((item) => (
          <motion.div
            className="relative"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }} // Staggered animation
          >
            <img src={item} className="w-11/12 h-auto object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
