// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
export default function Footer() {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //     });
  //   }, []);
  return (
    <footer
      // data-aos="fade-left"
      className="bg-slate-800  text-white lg:px-48 px-4 py-20"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">
            Mwangi
          </span>
          <p className="text-[16px] my-4">
            A passionate Full Stack Developer specializing in the MERN stack and
            Python Flask. With a robust foundation in both front-end and
            back-end development, I am dedicated to building scalable and
            efficient web applications. I thrive in dynamic environments and am
            always eager to learn and implement new technologies.
          </p>
        </div>
        <div className="lg:ml-8">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Services
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Web Design</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">SEO</li>
            <li className="my-2">E-commerce</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contact
          </h2>
          <p className="text-[16px] my-4">Email: joeeazy34@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +254-705-045-861</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Joeeazy"
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/mwangi-joe-b9b593227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out "
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://x.com/joeeeazyy?t=H8ON24UhpE8iM-4fUFZHyw&s=09"
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
            >
              <FaSquareXTwitter className="text-xl" />
            </a>
            <a
              href=""
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
            >
              <FaInstagramSquare className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
