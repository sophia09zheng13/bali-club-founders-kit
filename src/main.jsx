import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import FoundersKit from "./FoundersKit.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FoundersKit />
    <Analytics />
  </React.StrictMode>
);
