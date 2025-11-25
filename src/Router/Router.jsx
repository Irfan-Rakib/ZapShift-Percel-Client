import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/HomePage/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/coverage",
        element: <Coverage />,
        loader: () => fetch("/ServiceCentres.json").then((res) => res.json()),
      },
    ],
  },
]);
