import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { BallTriangle } from "react-loader-spinner";
import ParticlesComponent from "./components/ParticlesComponent";
// import AOS from "aos";
// import "aos/dist/aos.css";
function App() {
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //   });
  //   AOS.refresh();
  // return () => {
  //   //Kill your animation not sure of the syntax for AOS.
  //   //AOS.kill()
  //   //Or
  //   AOS.refresh();
  // };
  // }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-slate-900">
          <ParticlesComponent id="particles" />
          <Nav />
          <Banner />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
