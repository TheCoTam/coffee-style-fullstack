import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ProductsContextProvider from "@/context/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <Router>
        <App />
      </Router>
    </ProductsContextProvider>
  </React.StrictMode>
);
