import background_desktop from "public/assets/backgrounds/desktop.png";
import background_mobile from "public/assets/backgrounds/desktop.webp";
import Header from "./common/Header";
import Footer from "./common/Footer";
import About from "./common/About";
import Skills from "./common/Skills";
import Contacts from "./common/Contacts";
import Projects from "./common/Projects";

const App = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-t via-green-100 to-green-100 from-transparent min-h-dynamic-screen  w-screen z-0"
    >
      <div className="relative flex mx-auto flex-col items-center justify-start max-w-[1920px] min-h-dynamic-screen min-w-[300px] w-full z-0">
        <div className="sticky top-0 w-full z-30 h-auto xs:h-[4rem] lg:h-[5rem] bg-white opacity-70 hover:opacity-100 transition-full duration-500 shadow-lg">
          <Header />
        </div>
        <div className="grow w-full z-10 relative min-h-screen">
          <About />
          <Skills />
          <Projects />
          <Contacts />
        </div>
        <picture className="w-full h-full">
          <source media="(max-width: 768px)" srcSet={background_mobile} />
          <img
            className={`absolute top-0 mx-auto z-0 w-full brightness-110 opacity-30 h-[50rem] object-cover`}
            src={background_desktop}
            alt="logo"
          />
        </picture>
        <Footer />
      </div>
    </div>
  );
};

export default App;
