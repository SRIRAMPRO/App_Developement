// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./components/Layout/HomeLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdminSignIn from "./pages/AdminSignIn";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<HomeLayout />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin-signin" element={<AdminSignIn />} />
      <Route path="/admin/*" element={<Admin />} />
    </Routes>
  );
}

export default App;
