import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import avatar from "../public/assets/images/Avatar.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-textDark font-medium text-base flex flex-col gap-4 ">
          <p>
            Hello! I am Leon Wu. As a recent graduate with a software
            engineering degree, I enjoy creating websites and I have done
            several projects and internships in frontend and full-stack
            development. I have 2+ years of experience in React development and
            a few months of experience in Vue and API developments using Node.js
            (express.js) and Flask. I am currently looking for a full-time
            software engineering role.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              HTML5
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              CSS3
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Vue
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              GraphQL
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Flask
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              PostgreSQL
            </li>
            <li className="flex item-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              AWS
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={avatar}
                alt="profileImg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
