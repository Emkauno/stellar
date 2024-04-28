'use client'

import { use } from 'react'
import styles from "./page.module.css";
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import { AnimatePresence } from "framer-motion";
import Commerce from "@chec/commerce.js";

export default function Home() {

  const commerce = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY);

  const getData = async () => {
    try {
      const data = await commerce.products.list();
      return data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const products = use(getData())

  return (
    <main className={styles.main}>
      <AnimatePresence>
      <Hero key="hero"/>
      <About key="about"/>
      <Products key="products" products={products}/>
      <Contact/>
      </AnimatePresence>
    </main>
  );
}

