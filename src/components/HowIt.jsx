import React from "react";
import icon1 from "../images/icons/1.png";
import icon2 from "../images/icons/2.png";
import icon3 from "../images/icons/3.png";
import icon4 from "../images/icons/4.png";
import HowCard from "./HowCard";

const HowIt = () => {
  return (
    <div className="grid grid-cols-4 gap-5 bg-[#F5F4F1] py-10 px-5">
      <HowCard icon={icon1} title="Awesome Aroma"></HowCard>
      <HowCard icon={icon2} title="High Quality"></HowCard>
      <HowCard icon={icon3} title="Pure Grades"></HowCard>
      <HowCard icon={icon4} title="Proper Roasting"></HowCard>
    </div>
  );
};

export default HowIt;
