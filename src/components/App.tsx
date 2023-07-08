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
      className="bg-gradient-to-t via-green-100 to-green-100 from-transparent min-h-dynamic-screen  w-screen z-0"
    >
      <div className="relative flex mx-auto flex-col items-center justify-start max-w-[1920px] min-h-dynamic-screen min-w-[300px] w-full z-0">
        <div className="sticky top-0 w-full z-30 h-auto xs:h-[4rem] lg:h-[5rem] bg-white opacity-70 hover:opacity-100 transition-full duration-500 shadow-lg">
          <Header
            setShouldDropDownDisplay={setShouldDropDownDisplay}
            shouldDropDownDisplay={shouldDropDownDisplay}
          />
        </div>
        <main className="grow w-full z-10 relative min-h-screen">
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
