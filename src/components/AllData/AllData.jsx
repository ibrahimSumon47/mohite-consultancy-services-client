import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllData = () => {
  const [allData, setAllData] = useState([]);

  const url = `https://mohite-consultancy-services-server.vercel.app/alldata`;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllData(data));
  };

  const handleDeleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://mohite-consultancy-services-server.vercel.app/alldata/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your data has been deleted.", "success");
              const remaining = allData.filter((data) => data._id !== id);
              setAllData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="md:mx-20">
      <h2 className="text-5xl my-3 text-center font-bold">
        All Data Length: {allData.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Title</th>
              <th>Description</th>
              <th>status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((data) => (
              <tr key={data._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar"></div>
                    <div>
                      <div className="font-bold">{data.title}</div>
                    </div>
                    <div></div>
                  </div>
                </td>
                <td>{data.description}</td>
                <td>{data.status}</td>
                <th>
                  <Link to={`/update/${data._id}`}>
                    <button className="btn btn-primary">Update</button>
                  </Link>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteData(data._id)}
                    className="btn btn-error"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllData;
