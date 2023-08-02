import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import AllData from "./components/AllData/AllData.jsx";
import AllDataUpdate from "./components/AllData/AllDataUpdate.jsx";
import AddAData from "./components/AllData/AddAData.jsx";
import Main from "./components/Main.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <AllData />,
      },
      {
        path: "/update",
        element: <AllDataUpdate />,
      },
      {
        path: "/update/:id",
        element: <AllDataUpdate />,
        loader: ({ params }) =>
          fetch(
            `https://mohite-consultancy-services-server.vercel.app/update/${params.id}`
          ),
      },
      {
        path: "/addadata",
        element: <AddAData />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
