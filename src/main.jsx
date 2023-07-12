import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Gallery from "./sections/Gallery.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
