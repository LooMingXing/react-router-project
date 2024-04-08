import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
