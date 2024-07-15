import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About";

const AppLayout = () => {
  return (
    <div className="app">
      <Headers/>
      
    </div>
  );
};
const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },
  { path: "/about", element: <About /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
