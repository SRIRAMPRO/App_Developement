// HomeRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blogs from "../pages/Blog"
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import Repair from "../pages/Repairs";
import Tutorial from "../pages/tutorial";


const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/repair" element={<Repair />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default HomeRouter;
