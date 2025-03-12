import { createBrowserRouter } from "react-router-dom";
import { Layout } from "~/layout/layout";
import Home from "~/pages/Home/home";
import Creations from "~/pages/Creations/creations";
import Skills from "~/pages/Skills/skills";
import { Contact } from "~/pages/Contact/contact";
import NotFound from "~/pages/404/404";

export const routes = createBrowserRouter([
  {
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/creations",
        element: <Creations />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
