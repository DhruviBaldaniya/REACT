import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Component/Header/Header"; // Path to Header component
import Home from "./Pages/Home/Home"; // Path to Home component
import Services from "./Pages/Services/Services"; // Path to Services component
import Project from "./Pages/Project/Project"; // Path to Project component
import AboutUs from "./Pages/About Us/About"
import FeatureWork from "./Pages/Page/Feature/FeatureWork";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Router>
      {/* The header is rendered on all pages */}
      <Header />
      <Routes>
        {/* Redirect "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Route definitions */}
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/feature-work" element={<FeatureWork />} />

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
