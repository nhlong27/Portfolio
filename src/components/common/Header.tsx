import React from "react";

const Header = () => {
  return (
    <nav className="flex w-full flex-col xs:flex-row mx-auto h-full shadow-lg items-center opacity-100 ">
      <a href="" className="grid place-items-center xs:w-[15rem] w-full h-3/4 xs:mr-auto">Nguyen Hoang Long</a>
      <a href="" className="grid place-items-center xs:w-[10rem] w-full h-3/4 xs:ml-auto">
        About me
      </a>
      <a href="" className="grid place-items-center xs:w-[10rem] w-full h-3/4">
        Skills
      </a>
      <a href="" className="grid place-items-center xs:w-[10rem] w-full h-3/4">
        Projects
      </a>
      <a href="" className="grid place-items-center xs:w-[10rem] w-full h-3/4">
        Contacts
      </a>
    </nav>
  );
};

export default Header;
