import { CUSINES } from "../constants";
import { motion } from "framer-motion";

const containerVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: {
    staggerChildren: 1,
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
  transition: {
    staggerChildren: 1,
  },
};

function Expertise() {
  return (
    <section id="expertise">
      <h2 className="text-white my-8  text-center text-3xl tracking-tighter lg:text-4xl select-none">
        Our Expertise
      </h2>

      {/* main div */}
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVar}
        className="container mx-auto  "
      >
        {CUSINES.map((cusine, index) => (
          <motion.div
            key={index}
            variants={itemVa}
            className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2"
          >
            <div className="text-white select-none flex-shrink-0 pr-8 text-2xl">
              {cusine.number}
            </div>

            {/* img section  */}

            <div className="w-1/3 flex-shrink-0">
              <img
                src={cusine.image}
                alt={cusine.title}
                className="select-none  h-auto rounded-3xl"
              ></img>
            </div>

            {/* title section */}
            <div className="pl-8 ">
              <h3 className="select-none text-xl uppercase tracking-tighter text-red-300">
                {cusine.title}
              </h3>
              <p className="text-white  mt-4 text-lg tracking-tighter">
                {cusine.description}
              </p>
            </div>
            {/* // */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Expertise;
