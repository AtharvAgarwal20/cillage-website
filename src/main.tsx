import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalProvider } from "./store/global-context.tsx";

import Landing from "./routes/Landing/Landing.tsx";

import "./global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>
);
