import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="max-w-5xl mx-auto px-6 text-slate-400 text-sm">© {new Date().getFullYear()} Athit — built with React + Framer Motion</div>
    </footer>
  )
}