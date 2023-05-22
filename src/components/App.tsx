import React from "react";
import background_mobile from "assets/backgrounds/mobile.png";
import background_desktop from "assets/backgrounds/desktop.png";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { useMediaQueries } from "src/hooks/useMediaQueries";

const App = () => {
  const { isXs } = useMediaQueries();
  return (
    <div className="bg-gradient-to-t via-green-100 to-green-100 from-transparent min-h-dynamic-screen  w-screen z-0">
      <div className="relative flex mx-auto flex-col items-center justify-start max-w-[1920px] min-h-dynamic-screen min-w-[300px] w-11/12 z-0">
        <div className="sticky top-0 w-full z-30 h-auto xs:h-[4rem] lg:h-[5rem] bg-green-100 opacity-70 hover:opacity-100 transition-full duration-500">
          <Header />
        </div>
        <div className="grow w-full z-10 relative min-h-screen">
          {!isXs && (
            <img
              src={background_mobile}
              className={`absolute top-0 mx-auto z-0 w-full ${
                isXs
                  ? "brightness-110 opacity-30"
                  : "brightness-110 opacity-50 "
              }`}
              alt="logo"
            />
          )}
          <div className="h-screen">
            dfd
          </div>
        </div>
        {isXs && (
          <img
            src={background_desktop}
            className={`absolute top-0 mx-auto z-0 w-full ${
              isXs ? "brightness-110 opacity-30" : "brightness-110 opacity-50 "
            }`}
            alt="logo"
          />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default App;