import React from "react";
import background_mobile from "public/assets/backgrounds/mobile.png";
import background_desktop from "public/assets/backgrounds/desktop.png";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { useMediaQueries } from "src/hooks/useMediaQueries";
import About from "./common/About";

const App = () => {
  const { isXs } = useMediaQueries();
  return (
    <div className="bg-gradient-to-t via-green-100 to-green-100 from-transparent min-h-dynamic-screen  w-screen z-0">
      <div className="relative flex mx-auto flex-col items-center justify-start max-w-[1920px] min-h-dynamic-screen min-w-[300px] w-full z-0">
        <div className="sticky top-0 w-full z-30 h-auto xs:h-[4rem] lg:h-[5rem] bg-green-100 opacity-70 hover:opacity-100 transition-full duration-500 shadow-lg">
          <Header />
        </div>
        <div className="grow w-full z-10 relative min-h-screen">
          {!isXs && (
            <img
              src={background_mobile}
              className={`absolute top-0 mx-auto z-0 h-[20rem] w-full ${
                isXs
                  ? "brightness-110 opacity-30"
                  : "brightness-110 opacity-50 "
              }`}
              alt="logo"
            />
          )}
          <About />
          <div className="w-11/12">
            dfd
          </div>
        </div>
        {isXs && (
          <img
            src={background_desktop}
            className={`absolute top-0 mx-auto z-0 w-full brightness-110 opacity-30 h-[50rem] object-cover`}
            alt="logo"
          />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;
