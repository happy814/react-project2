import React from "react";
import video from "../assets/hero.webm";
import logo from "../assets/logo.png";
import hero from "../assets/hero.AVIF";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className=" select-none  relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-0 h-full w-full overflow-hidden">
        {/* Hero benar  */}

        <video
          src={video}
          className="h-full w-full object-cover "
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      {/* <div className=" bg-gradient-to-b from-transparent from-70% to-black"></div> */}

      <div
        className=" relative z-20
         flex h-screen flex-col justify-end pb-20"
      >
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ two: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          src={logo}
          alt="restaura"
          className="w-full p-4"
        />
        <p className="p-4 text-lg text-white">Paris</p>
      </div>
    </section>
  );
}

export default Hero;

// line-19 - you can use absolute inset-0 -z-0
