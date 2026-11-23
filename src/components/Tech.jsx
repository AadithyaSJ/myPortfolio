import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10 text-center">
        <p className={`${styles.heroSubText}`}>Technologies & Tools</p>
        <h2 className={`${styles.heroHeadText}`}>Technical Skills.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-8">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center group" key={technology.name}>
            <div className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="mt-2 text-[13px] font-semibold text-secondary group-hover:text-white transition-colors duration-200">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
