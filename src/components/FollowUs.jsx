import React from "react";
import cup1 from "../images/cups/Rectangle 9.png";
import cup2 from "../images/cups/Rectangle 10.png";
import cup3 from "../images/cups/Rectangle 11.png";
import cup4 from "../images/cups/Rectangle 12.png";
import cup5 from "../images/cups/Rectangle 13.png";
import cup6 from "../images/cups/Rectangle 14.png";
import cup7 from "../images/cups/Rectangle 15.png";
import cup8 from "../images/cups/Rectangle 16.png";

const FollowUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-10">
        <p>Follow Us Now</p>
        <h3 className="font-bold text-6xl text-[#331A15]">
          Follow on Instagram
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-5 w-11/12 mx-auto">
        <figure>
          <img src={cup1} alt="" className="w-full rounded-2xl" />
        </figure>
        <figure>
          <img src={cup2} alt="" className="w-full rounded-2xl" />
        </figure>
        <figure>
          <img src={cup3} alt="" className="w-full rounded-2xl" />
        </figure>
        <figure>
          <img src={cup4} alt="" className="w-full rounded-2xl" />
        </figure>
        <figure>
          <img src={cup5} alt="" className="w-full rounded-2xl" />
        </figure>
        <figure>
          <img src={cup6} alt="" className="w-full rounded-2xl" />
        </figure>
        <figure>
          <img src={cup7} alt="" className="w-full rounded-2xl" />
        </figure>
        <figure>
          <img src={cup8} alt="" className="w-full rounded-2xl" />
        </figure>
      </div>
    </div>
  );
};

export default FollowUs;
