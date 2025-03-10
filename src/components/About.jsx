import React from "react";
import AboutImage from "../assets/aboutme-image.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
            A highly motivated BE Computer Science and Engineering graduate with hands-on experience in web development
 during my internship at ICEICO Pvt Ltd, Nagpur. I have developed a strong foundation in programming, software
 development, and problem-solving. Eager to apply my academic knowledge and internship learnings in a professional
 environment, I am passionate about continuous learning and growth, and I am ready for immediate joining. I am open
 to relocation for the right opportunity
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                 BOOTSTRAP-5 & TAILWIND-CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                      JavaScript                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>


               <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Java
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>


               <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  OOP's
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Python
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        6+
                    </h3>
                    <p>Months Experience</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        10+
                    </h3>
                    <p>Projects Completed</p>
                </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
