import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Projects from './pages/projects.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/projects" element={ <Projects /> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
)
