import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const CoffeeView = () => {
  const navigate = useNavigate();
  const { _id, name, chef, price, taste, category, photo_URL, details } =
    useLoaderData();
  return (
    <div className="h-[calc(100vh-349px)] py-10">
      <button
        onClick={() => navigate("/")}
        className="btn bg-amber-500 text-white font-semibold"
      >
        Back To Home
      </button>

      <div className="flex gap-5 py-10 justify-center items-center bg-[#F5F4F1]">
        <figure>
          <img src={photo_URL} alt="" className="w-full" />
        </figure>
        <div>
          <h1 className="text-3xl text-amber-800 font-bold">NiceTies</h1>
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-bold">Taste:</span> {taste}
          </p>
          <p>
            <span className="font-bold">Category:</span> {category}
          </p>
          <p>
            <span className="font-bold">Details:</span> {details}
          </p>
          <p>
            <span className="font-bold">Price:</span> {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeView;
