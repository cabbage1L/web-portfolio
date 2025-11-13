import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="sm:py-8">
      <div className="max-w-5xl mx-auto px-6 "><img src="./frog.png" alt="flogflog" className="sm:h-20" /></div>
      <div className="max-w-5xl mx-auto px-6 text-slate-400 text-sm">© {new Date().getFullYear()} Athit — built with React</div>
    </footer>
  )
}