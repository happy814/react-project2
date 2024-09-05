import missionImg from "../assets/mission.jpeg";
import mission from "../assets/mission.mp4";
import { MISSION } from "../constants";
import { motion } from "framer-motion";
function Mission() {
  return (
    <section className="text-yellow-100 select-none" id="mission">
      <div className="container mx-auto text-center">
        <h2 className=" mb-8 text-3xl lg:text-4xl">Our Mission</h2>
        <div className="relative flex items-center justify-center ">
          <video
            className="w-full rounded-3xl "
            muted
            autoPlay
            loop
            playsInline
            poster={missionImg}
          >
            <source src={mission} type="video/mp4" />
          </video>

          {/* next div */}

          <div className="absolute h-full w-full rounded-3xl bg-black/40"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ two: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute px-10 max-w-lg lg:text-2xl"
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
