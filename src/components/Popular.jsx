import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { IoMdEye } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Popular = ({ coffees }) => {
  const navigate = useNavigate();
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="">
      <div className="flex flex-col items-center gap-2 py-10">
        <p>--- Sip & Savor ---</p>
        <h1 className="text-4xl font-bold text-amber-400">
          Our Popular Products
        </h1>
        <button className="btn bg-amber-500 text-white">
          Add Coffee <GiCoffeeCup size={24} />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 py-10 px-5">
        {coffees.map((coffee) => (
          <>
            <div
              key={coffee._id}
              className="grid grid-cols-5 gap-5 items-center bg-[#F5F4F1]  p-5"
            >
              <figure className="col-span-2">
                <img src={coffee.photo_URL} alt="" />
              </figure>
              <div className="col-span-2">
                <p>
                  <span className="font-bold">Name:</span> {coffee.name}
                </p>
                <p>
                  <span className="font-bold">Chef:</span> {coffee.chef}
                </p>
                <p>
                  <span className="font-bold">Price:</span>
                  {coffee.price} taka
                </p>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <button
                  onClick={() => navigate(`/coffee-view/${coffee._id}`)}
                  className="btn bg-amber-500 text-white"
                >
                  <IoMdEye size={24} />
                </button>
                <button
                  onClick={() => navigate(`/update-coffee/${coffee._id}`)}
                  className="btn bg-amber-500 text-white"
                >
                  <MdEdit size={24} />
                </button>
                <button
                  onClick={() => handleDelete(coffee._id)}
                  className="btn bg-amber-500 text-white"
                >
                  <MdDelete size={24} />
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Popular;
