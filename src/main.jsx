import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/root/Root.jsx";
import Mobiles from "./components/mobile/Mobiles.jsx";
import Laptop from "./components/laptop/Laptop.jsx";
import Home from "./components/Home/Home.jsx";
import Users from "./components/users/Users.jsx";
import Posts from "./components/Posts/Posts.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "laptop",
        Component: Laptop,
      },
      {
        path: "mobiles",
        Component: Mobiles,
      },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
    ],
  },
  {
    path: "about",
    element: <div>it's about page</div>,
  },
  {
    path: "app",
    Component: App,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
