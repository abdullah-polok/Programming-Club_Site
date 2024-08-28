import React from "react";
import { motion } from "framer-motion";
import im1 from "../../assets/images/FtxoW4YWYAAQQIb.jpg";
import im2 from "../../assets/images/Google-Hashcode-Competition-UKH-1-1024x683.jpg";
import im3 from "../../assets/images/Google-Hashcode-Competition-UKH-10-1024x683.jpg";
import im4 from "../../assets/images/Google-Hashcode-Competition-UKH-2.jpg";
import im5 from "../../assets/images/Google-Hashcode-Competition-UKH-4-1024x683.jpg";
import im6 from "../../assets/images/Google-Hashcode-Competition-UKH-7-1024x683.jpg";
import im7 from "../../assets/images/Google-Hashcode-Competition-UKH-10-1024x683-Copy.jpg";
import im8 from "../../assets/images/Google-Hashcode-Competition-UKH-2-copy.jpg";
import im9 from "../../assets/images/Google-Hashcode-Competition-UKH-4-1024x683-copy.jpg";
// import "./Gallery.css";
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
    <div className="mt-36">
      <div className="content-title">
        <h1 className="text-2xl md:text-2xl lg:text-4xl text-[#7c8deb]">
          Gallery
        </h1>
      </div>
      <div className="mt-10">
        <motion.div
          className="carousel relative"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <motion.div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-center p-5 ">
              {images.map((image) => {
                console.log(image);
                return (
                  <motion.div
                    whileHover={{ scale: 1.1, borderRadius: 12 }}
                    // whileTap={{ scale: 2 }}
                    key={image}
                    transition={{ delay: 0.1 }}
                  >
                    <img className="w-full h-auto rounded-xl" src={image} />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
//w-1/4 md:w-3/4 lg:
export default Gallery;
