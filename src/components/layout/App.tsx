import Header from "./Header";
import Footer from "./Footer";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Contacts from "../sections/Contacts";
import Projects from "../sections/Projects";
import Hero from "./Hero";
import React from "react";

const App = () => {
  return (
    <div
      id="about"
      className="z-0 min-h-dynamic-screen w-screen bg-background font-vina"
    >
      <div className="relative z-0 mx-auto flex min-h-dynamic-screen w-full min-w-[250px] max-w-[1920px] flex-col items-center justify-start">
        <div className="transition-full sticky top-0 z-30 h-[4rem] w-full bg-background duration-500">
          <Header />
        </div>
        <main className="relative z-10 min-h-screen w-full grow sm:w-11/12">
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </main>
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default App;
