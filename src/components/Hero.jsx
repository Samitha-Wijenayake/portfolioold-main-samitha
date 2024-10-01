import React from "react";
import profilePic from "../assets/profilepic.jpg";
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 sm: ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 py-10">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl pl-4 font-semibold tracking-tight lg:mt-16">
              <Typewriter
                options={{
                  strings: ['Samitha Wijenayake',],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <span className="bg-gradient-to-r pl-4 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              <Typewriter
                options={{
                  strings: ['I am a Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>

          </div>
          <div className="py-8 sm:pl-4 ">
            <a href="https://drive.google.com/file/d/1BKIjv6mJuKwJkuW0qz3xBLnanKFIOYCt/view?usp=sharing">
              <button className="px-1   py-1 w-full sm:w-fit lg:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-slate-900 hover:bg-slate-800 rounded-full px-5 py-2">
                  Download Resume
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pb-10">
          <div className="flex p-2 justify-center">
            <img
              src={profilePic}
              alt="profile"
              className="w-70 h-80 border-4 border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 