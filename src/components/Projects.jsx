import { useEffect } from "react";
import AOS from "aos";
export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: "2000",
    });
  }, []);
  return (
    <div
      id="Projects"
      className="p-5 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl lg:text-5xl font-semibold mb-10 lg:mb-20 leading-normal uppercase text-fuchsia-800">
        Projects
      </h1>
      <div
        data-aos="fade-right"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10"
      >
        {/* cards */}

        <div
          data-aos="fade-up"
          className="card text-lg lg:text-xl rounded-lg border border-fuchsia-800 shadow-xl b_glow mb-5"
        >
          <figure>
            <img
              src="/images/projects/project1.png"
              alt="Project 1"
              className="rounded-t-md"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title mb-4 text-gray-100 font-semibold py-1 px-12">
              Chat App
            </h2>
            <p className="mb-4 text-gray-100 px-2">
              A Fullstack Chat app with Real Time Messaging Built using Mern
            </p>
            <div className="card-actions flex justify-center">
              <button className="neno-button shadow-xl mb-6  glow c border-2 text-gray-200 rounded-lg py-2 px-5 uppercase relative overflow-hidden transition duration-300 ease-in-out">
                <a href="https://chat-app-production-j5xl.onrender.com/">
                  Live Demo
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          className="card text-lg lg:text-xl rounded-lg border border-fuchsia-800 shadow-xl b_glow mb-5"
        >
          <figure>
            <img
              src="/images/projects/project2.png"
              alt="Project 2"
              className="rounded-t-md"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title mb-4 text-gray-200 font-semibold py-1 px-12">
              Real Estates Web App
            </h2>
            <p className="mb-4 text-gray-200 px-2">
              A Fullstack Real Estates WebApp built using MERN stack
            </p>
            <div className="card-actions flex justify-center">
              <button className="neno-button shadow-xl mb-6 glow text-gray-200 border-2 rounded-lg py-2 px-5 uppercase relative overflow-hidden transition duration-300 ease-in-out">
                <a href="https://real-estates-c0vr.onrender.com/">Live Demo</a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="card text-lg lg:text-xl rounded-md border border-fuchsia-800 shadow-xl b_glow mb-5"
        >
          <figure>
            <img
              src="/images/projects/project3.png"
              alt="Project 3"
              className="rounded-t-md"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title mb-4 text-gray-200 font-semibold py-1 px-12">
              Virtual reality Website
            </h2>
            <p className="mb-4 text-gray-200 px-2">
              A Landing Page for a Virtual Reality company built using react.js
            </p>
            <div className="card-actions flex justify-center">
              <button className="neno-button shadow-xl mb-6  glow text-gray-200 border-2 rounded-lg py-2 px-5 uppercase relative overflow-hidden transition duration-300 ease-in-out">
                <a href="https://devvirtualr-git-main-joeeazys-projects.vercel.app/">
                  Live Demo
                </a>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          className="card text-lg lg:text-xl rounded-md border border-fuchsia-800 shadow-xl b_glow mb-5"
        >
          <figure>
            <img
              src="/images/projects/project4.png"
              alt="Project 3"
              className="rounded-t-md"
            />
          </figure>
          <div className="card-body flex flex-col justify-between">
            <h2 className="card-title mb-4 text-gray-200 font-semibold py-1 px-12">
              Frontend E-commerce App
            </h2>
            <p className="mb-4 text-gray-200 px-2">
              Frontend UI/UX for an Ecomerce web App with filter functionalities
            </p>
            <div className="card-actions flex justify-center">
              <button className="neno-button shadow-xl mb-6 glow text-gray-200 border-2 rounded-lg py-2 px-5 uppercase relative overflow-hidden transition duration-300 ease-in-out">
                <a href="https://coral-tau.vercel.app/">Live Demo</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
