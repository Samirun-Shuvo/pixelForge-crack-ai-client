import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Generate from "../pages/Generate";
import PaintingDetails from "../pages/PaintingDetails";
import Paintings from "../pages/Paintings";
import Replies from "../pages/Replies";
import baseUrl from "../baseUrl/baseUrl.js";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "paintings",
        element: <Paintings></Paintings>,
        loader: () => fetch(`${baseUrl}/paintings`),
      },
      {
        path: "generate",
        element: (
          <PrivateRoute>
            <Generate></Generate>
          </PrivateRoute>
        ),
      },
      {
        path: "/paintings/:id",
        element: (
          <PrivateRoute>
            <PaintingDetails></PaintingDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${baseUrl}/paintings/${params.id}`),
      },
      {
        path: "replies",
        element: (
          <PrivateRoute>
            <Replies></Replies>
          </PrivateRoute>
        ),
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
    ],
  },
]);

export default mainRoutes;
