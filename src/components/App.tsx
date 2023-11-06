import Header from "./Header";
import Footer from "./Footer";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Contacts from "./sections/Contacts";
import Projects from "./sections/Projects";
import Hero from "./Hero";
import React from "react";

const App = () => {
  const [shouldDropDownDisplay, setShouldDropDownDisplay] =
    React.useState(false);
  return (
    <div
      id="about"
      className="min-h-dynamic-screen z-0 w-screen bg-gradient-to-t from-transparent via-green-100 to-green-100 font-vina"
    >
      <div className="min-h-dynamic-screen relative z-0 mx-auto flex w-full min-w-[300px] max-w-[1920px] flex-col items-center justify-start">
        <div className="xs:h-[4rem] transition-full sticky top-0 z-30 h-auto w-full bg-white opacity-70 shadow-lg duration-500 hover:opacity-100 lg:h-[5rem]">
          <Header
            setShouldDropDownDisplay={setShouldDropDownDisplay}
            shouldDropDownDisplay={shouldDropDownDisplay}
          />
        </div>
        <main className="relative z-10 min-h-screen w-full grow sm:w-11/12">
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
