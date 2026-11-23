import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-10 min-h-[280px] flex flex-col justify-evenly items-center'>
          <img className='w-16 h-16 object-contain' src={icon} alt="" />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a Full-Stack Developer and AI Systems Engineer, and a 2× Smart India Hackathon Winner (SIH 2024 & 2025). My core focus is building autonomous multi-agent systems with LangGraph, production RAG architectures, and resilient full-stack platforms using Django, FastAPI, React, Next.js, and PostgreSQL. With industry experience designing high-throughput backends for 500+ daily enterprise users and building multi-level RBAC accounting workflows, I blend algorithmic intelligence with clean, reliable software engineering — alongside deep expertise in 3D visualization with Three.js and Unreal Engine.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
