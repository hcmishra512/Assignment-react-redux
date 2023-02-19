import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddData from "./components/AddData";
import EditData from "./components/EditData";
import Home from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditData />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
