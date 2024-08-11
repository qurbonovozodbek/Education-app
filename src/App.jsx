// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import CourseDetail from "./pages/CourseDetail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
    </>
  );
};

export default App;
