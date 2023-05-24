import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [shouldDropDownDisplay, setShouldDropDownDisplay] =
    React.useState(false);
  return (
    <nav className="flex w-11/12 flex-row mx-auto h-full items-center relative z-30">
      <a
        href=""
        className="flex justify-center items-center xs:w-[15rem] w-full h-3/4 xs:mr-auto text-[1.5rem] font-bold tracking-wider whitespace-nowrap text-stone-900 uppercase md:p-0 py-4"
      >
        NH <span className="text-emerald-700">Long</span>{" "}
      </a>
      <button
        onClick={() => setShouldDropDownDisplay((prev) => !prev)}
        className={`visible md:hidden ml-auto transition-full duration-100 ${
          shouldDropDownDisplay ? "rotate-90" : ""
        }`}
      >
        <GiHamburgerMenu size={25} />
      </button>
      <div
        className={`flex w-full absolute md:static md:max-h-full md:h-full bg-emerald-100 md:bg-green-100  z-20 flex-col h-[12rem] justify-center items-center md:flex-row visible text-xl md:text-[1.2rem] text-stone-900 overflow-hidden top-[4.3rem]  md:shadow-none rounded-sm transition-full duration-300 divide-y-[1px] divide-emerald-200 md:divide-none md:opacity-100 ${
          shouldDropDownDisplay ? "max-h-[12rem] opacity-100 shadow-lg" : "max-h-0 opacity-0"
        }`}
      >
        <a
          href=""
          className="grid hover:bg-green-200 md:hover:bg-green-100 hover:font-bold hover:text-stone-900 transition-full duration-100 place-items-center xs:w-[8rem] w-full h-3/4 py-2 xs:ml-auto"
        >
          About me
        </a>
        <a
          href=""
          className="grid hover:bg-green-200 md:hover:bg-green-100 hover:font-bold hover:text-stone-900 transition-full duration-100 place-items-center xs:w-[8rem] w-full h-3/4 py-2"
        >
          Skills
        </a>
        <a
          href=""
          className="grid hover:bg-green-200 md:hover:bg-green-100 hover:font-bold hover:text-stone-900 transition-full duration-100 place-items-center xs:w-[8rem] w-full h-3/4 py-2"
        >
          Projects
        </a>
        <a
          href=""
          className="grid hover:bg-green-200 md:hover:bg-green-100 hover:font-bold hover:text-stone-900 transition-full duration-100 place-items-center leading-4 xs:w-[8rem] w-full h-3/4 py-2"
        >
          Contacts
        </a>
      </div>
    </nav>
  );
};

export default Header;
