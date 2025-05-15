import React from "react";
import bannerImage from "../images/more/3.png";
import HowIt from "../components/HowIt";
import Popular from "../components/Popular";
import { useLoaderData } from "react-router";
import FollowUs from "../components/FollowUs";

const Home = () => {
  const coffees = useLoaderData();

  return (
    <div>
      <div
        className="hero h-[calc(100vh-349px)]"
        style={{
          backgroundImage: "url(" + bannerImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn bg-amber-500 text-white">Learn More</button>
          </div>
        </div>
      </div>
      <HowIt></HowIt>
      <Popular coffees={coffees}></Popular>
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
