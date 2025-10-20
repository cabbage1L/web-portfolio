import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import StoriesScreen from './components/StoriesScreen';


export default function App() {
  return (
    <BrowserRouter basename="/web-portfolio">
      <div className="min-h-screen text-white bg-black">
        <div className="relative overflow-hidden">
          <Navbar />
          <main className="px-3 py-3 bg-black">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Projects />
                    <About />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route path="/Stories" element={<StoriesScreen />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

