// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_6eps88n", "template_ak7f9se", form.current, {
        publicKey: "4R0dHX4IVyDng8d0r",
      })
      .then(
        () => {
          setEmailSent(true); // Set emailSent state to true
          console.log("SUCCESS!");
          setTimeout(() => {
            setEmailSent(false);
          }, 3000);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //     });
  //   }, []);
  return (
    <div
      id="Contact"
      data-aos="fade-left"
      className="p-4 lg:p-20 flex flex-col items-center justify-center "
    >
      <h1 className="text-3xl lg:text-5xl font-semibold mb-10 lg:mb-20 leading-normal uppercase text-fuchsia-800">
        Contact Me
      </h1>
      <form
        action=""
        className="flex flex-col gap-2 lg:w-1/2"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="lg:flex gap-9 ">
          <input
            className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-white"
            name="user_name"
            type="text"
            placeholder="Enter Your Name"
            data-aos="fade-right"
            required="true"
          />
          <input
            className="w-full rounded-lg lg:my-3 my-4 bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-white"
            type="email"
            name="user_email"
            required="true"
            placeholder="Enter Your Email"
          />
        </div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          required="true"
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-white"
          placeholder="Write Your Message..."
        />
        <button
          className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10 my-6"
          type="submit"
          value="send"
        >
          Send Message
        </button>
      </form>
      {/* Conditional rendering of toast */}
      {emailSent && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success bg-fuchsia-900 text-white glow">
            <span>Message sent successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
}
