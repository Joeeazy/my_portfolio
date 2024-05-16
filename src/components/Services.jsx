import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="fade-left"
      id="Services"
      className="p-5 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-3xl lg:text-5xl font-semibold mb-10 lg:mb-20 leading-normal uppercase text-fuchsia-800">
        Services
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
        <div className="flex flex-col">
          <h2 className="text-lg lg:text-xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-24 lg:h-36 w-32 lg:w-44 border-2 border-fuchsia-800 b_glow mb-8 lg:mb-12">
            React.JS
          </h2>
          <h2 className="text-lg lg:text-xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-24 lg:h-36 w-32 lg:w-44 border-2 border-fuchsia-800 b_glow mb-8 lg:mb-12">
            Node.Js
          </h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg lg:text-xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-24 lg:h-36 w-32 lg:w-44 border-2 border-fuchsia-800 b_glow mb-8 lg:mb-12">
            Python
          </h2>
          <h2 className="text-lg lg:text-xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-ss-3xl rounded-br-3xl h-24 lg:h-36 w-32 lg:w-44 border-2 border-fuchsia-800 b_glow mb-8 lg:mb-12">
            Flask
          </h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg lg:text-xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-br-3xl rounded-ss-3xl  h-24 lg:h-36 w-32 lg:w-44 border-2 border-fuchsia-800 b_glow mb-8 lg:mb-12">
            SQL
          </h2>
          <h2 className="text-lg lg:text-xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-br-3xl rounded-ss-3xl  h-24 lg:h-36 w-32 lg:w-44 border-2 border-fuchsia-800 b_glow mb-8 lg:mb-12">
            MongoDB
          </h2>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg lg:text-xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-br-3xl rounded-ss-3xl  h-24 lg:h-36 w-32 lg:w-44 border-2 border-fuchsia-800 b_glow mb-10 lg:mb-15">
            CSS3
          </h2>
          <h2 className="text-lg lg:text-xl flex items-center justify-center font-semibold text-fuchsia-800 rounded-br-3xl rounded-ss-3xl h-24 lg:h-36 w-32 lg:w-44 border-2 border-fuchsia-800 b_glow mb-10 lg:mb-15">
            Git
          </h2>
        </div>
      </div>
    </div>
  );
}
