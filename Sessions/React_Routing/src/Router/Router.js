import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import PageNotFound from "../Pages/PageNotFound";
import Navbar from "../Components/Layouts/Navbar";

class MainRouter extends Component {
  render = () => {
    return (
      <Router>
        <Navnbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  };
}

export default MainRouter;
