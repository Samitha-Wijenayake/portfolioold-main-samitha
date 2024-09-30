import React from "react";
import uomlogo from "../assets/uomlogo.png"
import slogo from "../assets/sjvlogo.png"

const About = () => {
  return (
    <div className="pb-4">
      <h1 className="font-semibold my-10 text-center text-5xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="text-center mx-20 mb-10">
        <p className="text-lg">
          An enthusiastic undergraduate with a passion for technology and a knack for teamwork. 
          I thrive on challenges and aim to leverage emerging technologies as a software engineer intern. 
          With a friendly leadership style and a commitment to growth, I'm ready to make a positive impact.
        </p>
      </div>
      <div className="container mx-auto py-10 px-4 lg:px-0">
        <h2 className="text-4xl font-semibold text-center mb-10 tracking-wider">
          Educations
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* First Education Box */}
          <div className="bg-transparent border border-gray-300 p-6 rounded-lg transition-transform transform hover:scale-105 duration-300 hover:border-neutral-300">
            <div className="flex items-center mb-5">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src={uomlogo} alt="University of Moratuwa Logo" className="object-cover w-full h-full"/>
              </div>
              <h3 className="text-2xl font-bold text-white">University of Moratuwa</h3>
            </div>
            
            <p className="text-lg font-semibold text-white mb-5">
              B. Sc (Hons) in Information Technology
            </p>
            <p className="text-neutral-300 mb-5">
              I am an undergraduate at the University of Moratuwa, pursuing a
              BSc (Hons) in Information Technology. I am in my third year and
              have already completed coursework that includes Data Structures
              and Algorithms (DSA), Object-Oriented Programming (OOP), Database
              Management Systems (DBMS), and many more.
            </p>

            <p className="text-neutral-300 mb-5">
              Expected in 2026
            </p>
          </div>

          {/* Second Education Box */}
          <div className="bg-transparent border border-gray-300 p-6 rounded-lg transition-transform transform hover:scale-105 duration-300 hover:border-neutral-3000">
            <div className="flex items-center mb-5">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src={slogo} alt="Swarna Jayanthi National College Logo" className="object-cover w-full h-full"/>
              </div>
              <h3 className="text-2xl font-bold text-white">Swarna Jayanthi National College, Kegalle</h3>
            </div>
            <p className="text-lg font-semibold text-white mb-5">
              GCE Advanced Level
            </p>
            <p className="text-neutral-300 mb-5">
              Biological Science stream<br />
              Results- ACC
            </p>
            <p className="text-lg font-semibold text-white mb-5">
              GCE Ordinary Level
            </p>
            <p className="text-neutral-300 mb-5">
              Results- 7A's and 2B's
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
