import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";

// Render the app component inside the root element
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Enable React's Strict Mode for development purposes
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
