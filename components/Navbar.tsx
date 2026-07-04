"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-6 bg-transparent"
    >
      <Link href="/" className="text-2xl font-black tracking-tighter text-white">
        JRV<span className="text-primary">.SYS</span>
      </Link>
      <ul className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase text-gray-300">
        {['Home', 'Platform', 'Enterprise', 'Contact'].map((item) => (
          <li key={item} className="hover:text-primary transition-colors cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
      <button className="px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-sm font-bold">
        Launch App
      </button>
    </motion.nav>
  );
}
