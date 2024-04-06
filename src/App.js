import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/contact" Component={Contact}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
