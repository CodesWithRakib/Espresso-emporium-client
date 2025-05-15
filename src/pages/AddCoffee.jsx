import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0]">
      <button
        onClick={() => navigate(`/add-coffee`)}
        className="btn bg-amber-500 text-white"
      >
        Back to Home
      </button>
      <div className=" p-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center py-5">
          <h1>Add Coffee</h1>
          <p className="text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleAddCoffee} className="flex flex-col">
          <div className=" grid grid-cols-2 gap-x-2">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label" htmlFor="chef">
                Chef
              </label>
              <input
                type="text"
                placeholder="Chef"
                name="chef"
                className="input"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                placeholder="price"
                name="price"
                className="input"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label" htmlFor="taste">
                Taste
              </label>
              <input
                type="text"
                placeholder="Taste"
                name="taste"
                className="input"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label" htmlFor="category">
                Category
              </label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input"
                required
              />
            </fieldset>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label" htmlFor="details">
                Details
              </label>
              <input
                type="text"
                placeholder="Details"
                name="details"
                className="input"
                required
              />
            </fieldset>
          </div>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label" htmlFor="photo">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo_URL"
              className="input w-full"
              required
            />
          </fieldset>
          <button type="submit" className="btn btn-neutral mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
