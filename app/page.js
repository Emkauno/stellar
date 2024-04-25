'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.main}>
      <AnimatePresence>
      <Hero/>
      <About/>
      <Products/>
      <Contact/>
      </AnimatePresence>
    </main>
  );
}
