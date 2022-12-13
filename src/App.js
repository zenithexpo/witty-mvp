import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
