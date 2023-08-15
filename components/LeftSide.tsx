
import React from "react";
import { PiGithubLogoLight } from "react-icons/pi";
import { BiLogoLinkedin, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";

const LeftSide = () => {
  return (
    <div className="w=-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">
        <a href="https://github.com/Leon-wyl" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <PiGithubLogoLight />
          </span>
        </a>
        <a href="https://www.linkedin.com/in/yilang-leon-wu/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BiLogoLinkedin />
          </span>
        </a>
        <a href="https://www.facebook.com/yilang.wu.16/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BiLogoFacebook />
          </span>
        </a>
        <a href="https://www.instagram.com/leon_wyl/" target="_blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
            <BiLogoInstagram />
          </span>
        </a>
      </div>
      <div className="w-[2px] h-32 bg-textDark" />
    </div>
  );
};

export default LeftSide;
