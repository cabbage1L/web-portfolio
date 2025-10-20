import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";





export default function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <div className="relative overflow-hidden">
        <Navbar />
        <main className="px-3 py-3 bg-black">
          <Home />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  )
}

