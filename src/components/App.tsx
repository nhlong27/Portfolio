import Header from "./Header";
import Footer from "./Footer";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contacts from "./sections/Contacts";
import Projects from "./sections/Projects";
import Hero from "./Hero";
import React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";


const App = () => {
  const [shouldDropDownDisplay, setShouldDropDownDisplay] =
    React.useState(false);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll()
  return (
    <div
      id="about"
      className="bg-gradient-to-t via-green-100 to-green-100 from-transparent min-h-dynamic-screen w-screen z-0"
    >
      <motion.div
        className="fixed inset-0 h-2 bg-secondary/50 origin-top-left z-20"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="relative flex mx-auto flex-col items-center justify-start max-w-[1920px] min-h-dynamic-screen min-w-[300px] w-full z-0">
        <div className="sticky top-0 w-full z-30 h-auto xs:h-[4rem] lg:h-[5rem] bg-white opacity-70 hover:opacity-100 transition-full duration-500 shadow-lg">
          <Header
            setShouldDropDownDisplay={setShouldDropDownDisplay}
            shouldDropDownDisplay={shouldDropDownDisplay}
          />
        </div>
        <main
          className="grow w-11/12 z-10 relative min-h-screen"
        >
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </main>
        <Hero />
        <Footer
          shouldDropDownDisplay={shouldDropDownDisplay}
          setShouldDropDownDisplay={setShouldDropDownDisplay}
        />
      </div>
    </div>
  );
};

export default App;
