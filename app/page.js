"use client";

import { use, useState, useEffect} from "react";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Commerce from "@chec/commerce.js";
import SmokeBg from "@/components/SmokeBg";
import WhiteBackground from "@/components/WhiteBackground";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const commerce = new Commerce("pk_569435ccc4565a0924d2d8248a06c1e5d1a7ea284e380");
  const [ products, setProducts ] = useState([])

  const getData = async () => {
    try {
      const data = await commerce.products.list();
      setProducts(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      {products ? (
        <main className={styles.main}>
          <SmokeBg/>
          <Hero/>
          <About/>
          <Products products={products} />
          <Contact/>
          <WhiteBackground/>
        </main>
      ) : null}
    </>
  );
}
