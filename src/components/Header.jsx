import React from "react";
import logoImage from "../images/more/logo1.png";

const Header = () => {
  return (
    <div className="py-5 bg-orange-950 flex gap-3 items-center justify-center text-white">
      <figure>
        <img src={logoImage} alt="logo here" className="w-10" />
      </figure>
      <h1 className="text-5xl font-bold text-center">Espresso Emporium</h1>
    </div>
  );
};

export default Header;
