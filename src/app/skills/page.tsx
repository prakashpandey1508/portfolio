"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import SkillSection from "./skillpage";
import Skillemojis from "./skillsemojis";



const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);

  return (
    <div ref={ref} className="w-[1200px] max-w-[90%] mx-auto md:mt-10">
      <div>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-10 text-center text-4xl">My Technical Skills</motion.h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Skillemojis/>
      </div>
      <motion.div
        className="my-10"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <SkillSection />
      </motion.div>

    </div>
  );
};

export default About;
