import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./notesApp";

import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>
);