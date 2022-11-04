import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import PageNotFound from "../Pages/PageNotFound";
import Navbar from "../Components/Layouts/Navbar";
import Members from "../Pages/Members";

class MainRouter extends Component {
  render = () => {
    return (
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/members" exact element={<Members/> } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  };
}

export default MainRouter;
