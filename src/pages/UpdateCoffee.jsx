import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const { _id, name, chef, price, taste, category, photo_URL, details } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Coffee Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(`/update-coffee/${_id}`);
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0]">
      <button
        onClick={() => navigate("/")}
        className="btn bg-amber-500 text-white"
      >
        Back to Home
      </button>
      <div className=" p-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center py-5">
          <h1 className="text-3xl font-bold">Update Existing Coffee Details</h1>
          <p className="text-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee} className="flex flex-col">
          <div className=" grid grid-cols-2 gap-x-2">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={name}
                className="input"
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
                defaultValue={chef}
                className="input"
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
                defaultValue={price}
                className="input"
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
                defaultValue={taste}
                className="input"
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
                defaultValue={category}
                className="input"
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
                defaultValue={details}
                className="input"
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
              defaultValue={photo_URL}
              className="input w-full"
            />
          </fieldset>
          <button type="submit" className="btn btn-neutral mt-4">
            Update Coffee Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
