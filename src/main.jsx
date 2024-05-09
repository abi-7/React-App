import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts from "./routes/Posts.jsx";
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";

//call function to create route config object
//store in const
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      //takes an array of more definitions
      //nested routes
      //create-post is now a child route of the Posts route
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "/create-post", element: <NewPost /> }]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
