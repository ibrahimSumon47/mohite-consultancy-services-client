import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AllDataUpdate = () => {
  const { id } = useParams();

  const handleUpdateData = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const status = form.status.value;
    const updatedData = { title, description, status };
    fetch(
      `https://mohite-consultancy-services-server.vercel.app/update/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Data Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="md:mx-20">
      <form onSubmit={handleUpdateData}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Update your title"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Update description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input
            type="text"
            name="status"
            placeholder="Update description"
            className="input input-bordered"
          />
        </div>
        <div className="form-control my-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Update Data"
          />
        </div>
      </form>
    </div>
  );
};

export default AllDataUpdate;