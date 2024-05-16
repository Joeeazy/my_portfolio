import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      className="lg:px-20 px-6 lg:py-0 py-12 lg:text-start flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16"
    >
      <div className="lg:w-3/4 w-full lg:py-40 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-semibold mb-8 leading-normal">
          Hello, I Am <br />
          <span className="text-lg">A FullStack developer</span>
        </h1>
        <p className="text-fuchsia-800 dev text-4xl font-semibold mb-8 leading-normal">
          I Build Things For The Web
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Joeeazy"
            className="text-fuchsia-800 glow hover:text-fuchsia-800 rounded-full p-3 bg-purple-100 hover:bg-purple-200 transition duration-300 ease-in-out"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/mwangi-joe-b9b593227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="text-fuchsia-800 glow hover:text-fuchsia-800 rounded-full p-3 bg-purple-100 hover:bg-purple-200 transition duration-300 ease-in-out"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://x.com/joeeeazyy?t=H8ON24UhpE8iM-4fUFZHyw&s=09"
            className="text-fuchsia-800 glow hover:text-fuchsia-800 rounded-full p-3 bg-purple-100 hover:bg-purple-200 transition duration-300 ease-in-out"
          >
            <FaSquareXTwitter className="text-xl" />
          </a>
          <a
            href=""
            className="text-purple-500 glow hover:text-purple-700 rounded-full p-3 bg-purple-100 hover:bg-purple-200 transition duration-300 ease-in-out"
          >
            <FaInstagramSquare className="text-xl" />
          </a>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src="/images/profile.jpeg"
          width={290}
          height={290}
          className="rounded-md border-2 p-1 border-purple-500 img_glow"
          alt="profile image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
