import React from "react";

const HowCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-start gap-2 p-5">
      <figure>
        <img src={icon} alt="" className="w-10" />
      </figure>
      <h3 className="text-3xl font-medium text-[#331A15]">{title}</h3>
      <p>You will definitely be a fan of the design & aroma of your coffee</p>
    </div>
  );
};

export default HowCard;
