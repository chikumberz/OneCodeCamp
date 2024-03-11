import React from "react";
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Header />

        <Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/about-us" element={<AboutUs />}/>
					<Route path="/projects" element={<Projects />}/>
				</Routes>
      </Router>
    </div>
  );
}

export default App;
