import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, badge, description, image, tags, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.25, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1.02, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full flex flex-col justify-between shadow-2xl border border-[#232631]'
      >
        <div>
          <div className='relative w-full h-[220px] rounded-xl overflow-hidden group'>
            <img
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              src={image}
              alt={name}
            />
            {badge && (
              <span className='absolute top-3 left-3 bg-[#050816]/85 backdrop-blur-sm text-[#915eff] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#915eff]/40'>
                {badge}
              </span>
            )}
            <div className='absolute inset-0 flex justify-end m-3 opacity-90 group-hover:opacity-100 transition-opacity'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:border hover:border-[#915eff]'
                title="View Source / Details"
              >
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[22px] leading-snug'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
          </div>
        </div>

        <div className='mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] font-medium ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}>Engineered Systems & Products</p>
        <h2 className={`${styles.heroHeadText}`}>Featured Projects.</h2>
      </motion.div>
      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          A curated selection of my work spanning autonomous multi-agent AI systems, high-performance web applications, enterprise business automation, and award-winning immersive simulations. Each project represents production-grade architecture, rigorous data validation, and intuitive user experiences.
        </motion.p>
      </div>
      <div className='mt-16 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
