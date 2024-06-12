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
          👋 Hey there, My Name Is Mwangi Joseph
        </h1>
        <p className="text-lg text-gray-300 mb-6 text-center">
          I'm a freelance Full Stack Web Developer. Here's my story: My journey
          began in the world of public health, where I envisioned a career
          shaping community well-being. However, life had a twist waiting for
          me. As I sat in my lectures, my mind wandered on What my peers were
          learning in other fields. Software engineering caught my eye. Without
          a roadmap, I dove into HTML, CSS, and JavaScript. I later joined ALX
          AFRICA, where I've grown to become a full-stack software developer.
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
