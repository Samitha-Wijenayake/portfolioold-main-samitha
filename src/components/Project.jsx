import React from "react";
import profilePic from "../assets/2nd-year-web-app.jpeg";
import Portfolio from "../assets/portfolio.png";
import Carrom from "../assets/carrom.png"; 
import mobileapp from "../assets/2nd-year-mobile-app.png";
import { LiaNode } from "react-icons/lia";

import Bottle from "../assets/bottlemachine.jfif";
import {
  RiReactjsLine,
  RiNextjsLine,
  RiTailwindCssFill,
  RiFlutterFill,
} from "react-icons/ri";
import {
  SiMui,
  SiAppwrite,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiArduino,
  SiMongodb, 
  SiEasyeda
} from "react-icons/si";

const Project = () => {
  return (
    <div className="boder-b border-white pb-10">
      <h1 className="font-semibold my-10 text-center text-5xl">
        My
        <span className="text-neutral-500"> Works</span>
      </h1>
      <div class="flex flex-wrap justify-center gap-10">
        {/* Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={profilePic}
              alt="Project Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Management system for tuition classes-Web app</h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              For our second-year software project, my team and I developed an Management system for
              tuition classes. The project creates to create an online platform to improve the
              process of finding and accessing tuition classes, benefiting students and teachers
              with modern web technology for an enhanced educational experience.
            </p>
          </div>
          {/* Role */}
          <div class="mt-4">
            <p class="text-sm font-semibold">
              Role: <span class="text-[#72e9ff]">Full Stack Developer</span>
            </p>
          </div>
          {/* Technologies */}
          <p class="text-sm font-semibold mt-4">Technologies:</p>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-2">
            <RiReactjsLine className="text-3xl text-cyan-600" />
            <LiaNode className="text-3xl text-blue-600" />
            <SiMongodb className="text-3xl text-white" />
            <SiMui className="text-3xl text-white" />
          </div>
          {/* View Source Code */}
          {/* <div class="mt-4">
            <a
              href="https://github.com/orgs/Expense-Tracker-System/repositories"
              class="text-[#72e9ff] text-sm font-semibold hover:underline flex items-center"
            >
              View Source Code{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 4.293a1 1 0 011.414 0l5 5a1 1 0 01.293.707v.006a1 1 0 01-.293.707l-5 5a1 1 0 01-1.414-1.414L15.586 11H6a1 1 0 010-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div> */}
        </div>

        {/* Another Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={mobileapp}
              alt="Portfolio Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Management system for tuition classes-Mobile app</h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              For our second-year software project, my team and I developed an Management system for
              tuition classes. The project creates to create an online platform to improve the
              process of finding and accessing tuition classes, benefiting students and teachers
              with modern mobile technology for an enhanced educational experience.
            </p>
          </div>
          {/* Role */}
          <div class="mt-4">
            <p class="text-sm font-semibold">
              Role: <span class="text-[#72e9ff]">Full Stack Developer</span>
            </p>
          </div>
          {/* Technologies */}
          <p class="text-sm font-semibold mt-4">Technologies:</p>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-2">
            <RiFlutterFill className="text-3xl text-cyan-400" />
            <LiaNode className="text-3xl text-blue-600" />
            <SiMongodb className="text-3xl text-cyan-600" />
          </div>
        </div>

        {/* Mora Carrom Web App */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={Carrom}
              alt="Mora Carrom Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Mora Carrom Web App-ongoing</h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              Mora Carrom is a web application for the Carrom Society of the University of Moratuwa. I am working on both the frontend and backend, featuring match scheduling, player comparisons, and a user-friendly, fully responsive interface.
            </p>
          </div>
          {/* Role */}
          <div class="mt-4">
            <p class="text-sm font-semibold">
              Role: <span class="text-[#72e9ff]">Full Stack Developer</span>
            </p>
          </div>
          {/* Technologies */}
          <p class="text-sm font-semibold mt-4">Technologies:</p>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-2">
            <RiReactjsLine className="text-3xl text-cyan-400" />
            <LiaNode className="text-3xl text-blue-600" />
            <SiMongodb className="text-3xl text-cyan-600" />
            <SiMui className="text-3xl text-blue-600" />
          </div>
        </div>

        {/* Another Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={Portfolio}
              alt="Portfolio Screenshot"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Portfolio Website</h2>
            <span class="block text-sm text-gray-400">2024</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              I am building my portfolio website using React.js and TailwindCSS.
              This site will showcase my personal details, skills, and work in a
              user-friendly and visually appealing manner.
            </p>
          </div>
          {/* Technologies */}
          <p class="text-sm font-semibold mt-4">Technologies:</p>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-2">
            <RiReactjsLine className="text-3xl text-cyan-400" />
            <RiTailwindCssFill className="text-3xl text-teal-500" />
          </div>
        </div>

        {/* Another Project Card */}
        <div class="w-full sm:w-1/3 bg-[#0d0f20] rounded-lg shadow-lg p-6 text-white transition-transform transform hover:scale-105 hover:shadow-xl">
          {/* Image */}
          <div class="mb-4">
            <img
              src={Bottle}
              alt="Smart Bottle Filling Machine"
              class="rounded-md object-cover"
            />
          </div>
          {/* Project Title */}
          <div>
            <h2 class="text-2xl font-semibold mb-2">Smart Bottle Filling Machine</h2>
            <span class="block text-sm text-gray-400">2022</span>
          </div>
          {/* Project Description */}
          <div class="mt-4">
            <p class="text-gray-300 text-sm">
              I am responsible for developing an automated bottle filling system
              that ensures precision in liquid quantities. This project aims to
              increase efficiency in liquid production and bottling industries.
            </p>
          </div>
          {/* Technologies */}
          <p class="text-sm font-semibold mt-4">Technologies:</p>
          {/* Tech Stack Icons */}
          <div class="flex space-x-2 mt-2">
            <SiArduino className="text-3xl text-gray-600" />
            <SiEasyeda className="text-3xl text-green-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
