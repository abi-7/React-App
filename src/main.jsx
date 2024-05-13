import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";
import PostDetails, { loader as postDetailsLoader} from './routes/PostDetails.jsx';

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
        loader: postsLoader,
        //action is triggered when a form is submitted in that route
        children: [
          { path: "/create-post", element: <NewPost />, action: () => {newPostAction} },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
