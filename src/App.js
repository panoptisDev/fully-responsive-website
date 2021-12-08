import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
