import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Register from "../components/Register";
import Reviews from "../components/Reviews";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
};

export default AppRoutes;
