import { createBrowserRouter } from "react-router-dom";
import { Layout } from "~/layout/layout";
import Home from "~/pages/Home/home";
import Creations from "~/pages/Creations/creations";
import Skills from "~/pages/Skills/skills";
import { Contact } from "~/pages/Contact/contact";

export const routes = createBrowserRouter([
  {
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
