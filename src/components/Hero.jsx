import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { aadithya, github } from "../assets";

const Hero = () => {
  // Cursor tracking motion values
  const mouseX = useMotionValue(700);
  const mouseY = useMotionValue(350);

  // Smooth spring physics for primary responsive glow
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  // Softer trailing spring physics for liquid, flowing chromatic delay
  const trailX = useSpring(mouseX, { damping: 40, stiffness: 55 });
  const trailY = useSpring(mouseY, { damping: 40, stiffness: 55 });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Center initial glow on window load
  useEffect(() => {
    if (typeof window !== "undefined") {
      mouseX.set(window.innerWidth * 0.45);
      mouseY.set(window.innerHeight * 0.4);
    }
  }, [mouseX, mouseY]);

  // Dynamic radial gradient templates that track cursor
  const primarySpotlight = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(147, 51, 234, 0.22), rgba(99, 102, 241, 0.10) 35%, transparent 75%)`;
  const flowingTrail = useMotionTemplate`radial-gradient(850px circle at ${trailX}px ${trailY}px, rgba(168, 85, 247, 0.12), rgba(59, 130, 246, 0.06) 45%, transparent 80%)`;

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full min-h-screen overflow-hidden bg-[#07050e] flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 cursor-default"
    >
      {/* Dynamic Cursor-Tracking Flowing Gradients */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700"
        style={{
          background: flowingTrail,
          opacity: isHovered ? 1 : 0.6,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: primarySpotlight,
          opacity: isHovered ? 1 : 0.7,
        }}
      />

      {/* Subtle baseline ambient glows */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-700/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Understated geometric grid overlay illuminated by the cursor gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_50%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">

        {/* Left Column: Typography & Narrative (Nix Rajput Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-[11px] sm:text-[12px] font-mono tracking-wider text-white/70 mb-6 w-fit uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            2× SMART INDIA HACKATHON WINNER • AI & FULL-STACK
          </div>

          {/* Giant Signature Name: Solid First Name + Hollow Outlined Surname */}
          <div className="select-none tracking-tight">
            <h1 className="text-[54px] xs:text-[68px] sm:text-[88px] md:text-[104px] xl:text-[116px] font-black leading-[0.9] text-white">
              AADITHYA
            </h1>
            <h1 className="text-[54px] xs:text-[68px] sm:text-[88px] md:text-[104px] xl:text-[116px] font-black leading-[0.9] text-stroke mt-1">
              S J
            </h1>
          </div>

          {/* 4-Line Narrative Brief with Colored Background Pill Highlights & Cursive Font */}
          <p className="mt-7 text-[#94a3b8] text-[16px] sm:text-[18px] max-w-xl leading-[1.85]">
            Full-Stack Developer & AI Systems Engineer architecting{" "}
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/30 text-purple-200 caveat font-bold text-[1.28em] leading-none">
              multi-agent workflows
            </span>, production{" "}
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-950/80 border border-indigo-500/30 text-indigo-200 caveat font-bold text-[1.28em] leading-none">
              RAG pipelines
            </span>, and high-throughput enterprise platforms used daily by{" "}
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-950/70 border border-amber-500/30 text-amber-200 caveat font-bold text-[1.28em] leading-none">
              500+ active users
            </span>.
          </p>

          {/* Subtle Metadata Ticker / Divider Line (Clean & Understated) */}
          <div className="mt-8 pt-5 border-t border-white/10 flex items-center flex-wrap gap-x-5 gap-y-2 text-[12px] sm:text-[13px] text-white/50 font-mono">
            <span>+ Full-Stack Web</span>
            <span>+ Multi-Agent AI</span>
            <span>+ 2× SIH Winner</span>
            <span>+ Django & FastAPI +</span>
          </div>

          {/* Action Buttons & Socials (Clean Solid Flat Buttons - No Gradients) */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-[#6d28d9] hover:bg-[#5b21b6] text-white font-medium text-[15px] flex items-center gap-2.5 transition-colors duration-200"
            >
              View work
              <span className="text-[14px]">→</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/15 hover:border-white/35 bg-transparent hover:bg-white/[0.04] text-white/90 hover:text-white font-medium text-[15px] flex items-center gap-2 transition-colors duration-200"
            >
              Get in touch
              <span className="text-white/60 text-sm">✉</span>
            </a>

            {/* Quick Profile Links */}
            <div className="flex items-center gap-2 ml-1 sm:ml-2">
              <a
                href="https://github.com/AadithyaSJ"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 bg-transparent hover:bg-white/[0.04] flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <img src={github} alt="GitHub" className="w-4 h-4 object-contain opacity-75 hover:opacity-100" />
              </a>

              <a
                href="https://linkedin.com/in/s-j-aadithya-80a551257"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 bg-transparent hover:bg-white/[0.04] flex items-center justify-center transition-colors text-white/70 hover:text-white font-bold text-[13px]"
                title="LinkedIn"
              >
                in
              </a>

              <a
                href="https://leetcode.com/u/Aadithya_S_J/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 bg-transparent hover:bg-white/[0.04] flex items-center justify-center transition-colors text-white/70 hover:text-white font-bold text-[12px]"
                title="LeetCode"
              >
                LC
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Architectural 3D Parallax Portrait Card with Floating Credibility Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Subtle Architectural Corner Crosshairs (+) */}
          <div className="absolute -top-6 -left-6 text-purple-400/30 font-mono text-sm pointer-events-none select-none">+</div>
          <div className="absolute -top-6 -right-6 text-purple-400/30 font-mono text-sm pointer-events-none select-none">+</div>
          <div className="absolute -bottom-6 -left-6 text-purple-400/30 font-mono text-sm pointer-events-none select-none">+</div>
          <div className="absolute -bottom-6 -right-6 text-purple-400/30 font-mono text-sm pointer-events-none select-none">+</div>

          {/* Subtle Ambient Radar Halo behind Portrait */}
          <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] hero-radar pointer-events-none" />
          <div className="absolute w-[250px] sm:w-[330px] h-[250px] sm:h-[330px] rounded-full border border-indigo-500/20 pointer-events-none animate-pulse" />
          <div className="absolute inset-0 m-auto w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-tr from-purple-600/25 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Ambient Backlight Halo */}
          <div className="absolute inset-0 m-auto w-[320px] sm:w-[380px] h-[400px] sm:h-[460px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-transparent rounded-[40px] blur-3xl pointer-events-none" />

          {/* 3D Interactive Parallax Card */}
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1200}
            transitionSpeed={1200}
            scale={1.01}
            glareEnable={true}
            glareMaxOpacity={0.08}
            glareColor="#a855f7"
            glarePosition="all"
            glareBorderRadius="32px"
            className="relative w-[310px] xs:w-[350px] sm:w-[390px] rounded-[32px] p-[1px] bg-gradient-to-b from-purple-500/40 via-white/10 to-indigo-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
          >
            <div className="relative rounded-[31px] bg-[#0c0919] overflow-hidden">
              {/* Inner Architectural Header Strip */}


              {/* Backdrop Depth Canvas: Illuminated Circular Portal */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full border border-purple-500/15 animate-[spin_30s_linear_infinite]" />
                <div className="absolute w-52 h-52 rounded-full border border-dashed border-indigo-500/20" />
                <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-purple-600/25 to-indigo-600/10 blur-xl" />
              </div>

              {/* The Cutout Portrait Image */}
              <div className="relative z-10 pt-4 px-2">
                <img
                  src={aadithya}
                  alt="Aadithya S J"
                  className="w-full h-auto object-cover contrast-[1.03] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Bottom Frosted Glass HUD Tray */}

            </div>
          </Tilt>

          {/* Floating Credibility Badge 1: SIH Winner (Top Left) */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 sm:-left-7 bg-[#0c081e]/90 border border-purple-500/40 rounded-2xl py-2 px-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl flex items-center gap-2.5 z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-lg">
              🏆
            </div>
            <div className="text-left">
              <p className="text-[12px] font-bold text-white leading-none">2× SIH Winner</p>
              <p className="text-[10px] text-purple-300 font-mono mt-0.5">Smart India Hackathon</p>
            </div>
          </motion.div>

          {/* Floating Credibility Badge 2: 500+ Daily Users (Bottom Right) */}
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute -bottom-4 -right-3 sm:-right-7 bg-[#0c081e]/90 border border-indigo-500/40 rounded-2xl py-2 px-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl flex items-center gap-2.5 z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-lg">
              ⚡
            </div>
            <div className="text-left">
              <p className="text-[12px] font-bold text-white leading-none">500+ Active Users</p>
              <p className="text-[10px] text-indigo-300 font-mono mt-0.5">Utoc Enterprise APIs</p>
            </div>
          </motion.div>

          {/* Floating Credibility Badge 3: 6-Agent LangGraph (Mid Left) */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-20 -left-5 sm:-left-9 bg-[#0c081e]/90 border border-emerald-500/40 rounded-2xl py-2 px-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl flex items-center gap-2.5 z-20 hidden sm:flex"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-sm">
              🤖
            </div>
            <div className="text-left">
              <p className="text-[12px] font-bold text-white leading-none">Multi-Agent AI</p>
              <p className="text-[10px] text-emerald-300 font-mono mt-0.5">LangGraph • BullBear</p>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 w-full flex justify-center items-center pointer-events-none">
        <a href="#about" className="pointer-events-auto">
          <div className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Scroll</span>
            <div className="w-4 h-7 rounded-full border border-white/20 flex justify-center items-start p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-1 h-1 rounded-full bg-white/60"
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
