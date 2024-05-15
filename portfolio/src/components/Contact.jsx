import React, { useEffect } from "react";
import AOS from "aos";
export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center "
    >
      <h1
        data-aos="fade-left"
        className="text-3xl lg:text-5xl font-semibold mb-10 lg:mb-20 leading-normal uppercase text-fuchsia-800"
      >
        Contact Me
      </h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9 ">
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            type="text"
            placeholder="Enter Your Name"
            data-aos="fade-right"
          />
          <input
            className="w-full rounded-lg lg:my-3 my-4 bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            type="text"
            placeholder="Enter Your Email"
            data-aos="fade-left"
          />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
          placeholder="Write Your Message..."
          data-aos="fade-right"
        />
        <button
          className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10 my-6"
          type="submit"
          data-aos="fade-left"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
