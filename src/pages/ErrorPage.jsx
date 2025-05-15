import React from "react";
import errorPhoto from "../images/404/404.gif";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div className="w-full h-[calc( 100vh - 349px)] flex  justify-center items-center">
        <div className="flex flex-col items-center justify-center py-10">
          <figure>
            <img src={errorPhoto} alt="" className="w-11/12" />
          </figure>
          <button
            onClick={() => navigate("/")}
            className="btn bg-amber-500 text-white font-bold"
          >
            Back To Home
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
