import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "~/routes";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
