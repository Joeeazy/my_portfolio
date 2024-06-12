export default function Banner() {
  return (
    <div
      id="About"
      className="lg:px-10 lg:w-4/3 px-4 lg:py-0 py-12 lg:text-wrap flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-3"
    >
      <div className="lg:w-2/3 w-full mt-10">
        <img
          src="/images/profile2.jpeg"
          width={290}
          height={290}
          className="rounded-md border-2 p-1 border-purple-500 img_glow mx-auto"
          alt="profile image"
          style={{ maxWidth: "90%", height: "auto" }}
        />
      </div>
      <div className="lg:w-2/3 w-full lg:py-40 flex flex-col items-center text-white lg:mr-12 sm:mt-4">
        <h1 className="text-4xl font-semibold mb-8 leading-normal text-purple-800 dev">
          ABOUT ME. <br />
        </h1>
        <h1 className="text-4xl leading-snug text-white mb-2">
          My Name Is Mwangi Joseph
        </h1>
        <p className="text-lg text-gray-400 mb-6 text-center">
          I am a skilled full-stack engineer who demonstrates technical skills,
          flexibility, and an innovative spirit. I easily handle challenges to
          produce scalable, high-quality solutions. My ability to switch between
          frameworks and technologies with ease, together with my strong
          cooperation and communication skills, guarantees seamless delivery of
          projects. I'm dedicated to lifelong learning, staying on the cutting
          edge of technology, and providing solutions that go above and beyond
          expectations.
        </p>
        <div className="flex mt-8 gap-4">
          <a
            href="/Mwangi Joseph Full Stack Software Developer Resume.pdf"
            download="Mwangi Joseph Full Stack Software Developer Resume"
          >
            <button className="neno-button shadow-xl hover:shadow-purple-800/50 glow text-white border-2 hover:bg-purple-800 border-purple-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden transition duration-300 ease-in-out">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
