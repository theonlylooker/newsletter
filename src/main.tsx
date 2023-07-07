import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MyRouterProvider } from "./router.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="bg-myBg h-screen grid sm:place-items-center">
      <MyRouterProvider />
    </div>
  </React.StrictMode>
);
