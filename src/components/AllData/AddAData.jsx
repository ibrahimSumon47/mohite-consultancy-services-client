import React from "react";
import Swal from "sweetalert2";

const AddAData = () => {
  const handleAddAData = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const status = form.status.value;

    const dataAdded = {
      title,
      description,
      status,
    };

    fetch("https://mohite-consultancy-services-server.vercel.app/alldata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataAdded),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your data has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-full md:mx-20">
      <form onSubmit={handleAddAData}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
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
            placeholder="description"
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
            placeholder="Status"
            className="input input-bordered"
          />
        </div>
        <div className="form-control my-6">
          <input className="btn btn-primary" type="submit" value="Add A Data" />
        </div>
      </form>
    </div>
  );
};

export default AddAData;