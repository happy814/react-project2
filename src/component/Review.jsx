import React from "react";
import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.AVIF";
import customer2 from "../assets/customer2.AVIF";
import customer3 from "../assets/customer3.AVIF";
import customer4 from "../assets/customer4.AVIF";
import { motion } from "framer-motion";

const containerVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: {
    staggerChildren: 0.8,
  },
};

const itemVa = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function Review() {
  return (
    <section id="review" className="text-white container mx-auto mb-8 mt-12  ">
      {/* main div */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVar}
        viewport={{ two: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={itemVa}
          className="mb-10 ml-2 text-xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[2.5rem]"
        >
          {REVIEW.content}
        </motion.p>

        {/* fast img */}
        <motion.div
          variants={itemVa}
          className="select-none flex items-center justify-center gap-6"
        >
          <img
            src={xaviour}
            width={80}
            height={80}
            alt={REVIEW.name}
            className=" rounded-full border"
          />
          {/* 2rd img */}
          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 3rd img */}
      <div className="select-none mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <img
            key={index}
            src={customer}
            alt="customer"
            className=" h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover py-2 md:px-4"
          />
        ))}
      </div>
    </section>
  );
}

export default Review;
