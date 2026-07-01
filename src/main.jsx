import React from "react";
import { createRoot } from "react-dom/client";
import FoundersKit from "./FoundersKit.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FoundersKit />
  </React.StrictMode>
);
