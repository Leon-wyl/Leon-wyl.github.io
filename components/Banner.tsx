"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, I am
      </motion.h3>
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        <TypeAnimation
          sequence={[`Leon (Yilang) Wu.\nI create websites and ...`, 5000, ""]}
          speed={50}
          style={{
            whiteSpace: "pre-line",
            fontSize: "3.75rem",
            lineHeight: "5rem",
          }}
          repeat={Infinity}
        />
        {/* Leon Wu.{" "}
        <span className="text-textDark mt-3 lgl:mt-4">I create websites</span> */}
      </motion.h1>
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a recent graduate with a software engineering degree at UNSW. I have solid computer science and software engineering foundation, with some industrial and project experience in full-stack development, and I am specialized in frontend-development. I am currently looking for a full-time software engineering role.
        <a href="mailto:yilangwu@outlook.com" target="_blank">
          <span className="text-textGreen inline-flex relative cursor-pointer h7 overflow-x-hidden group">
            &nbsp;Know More
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
    </section>
  );
};

export default Banner;
