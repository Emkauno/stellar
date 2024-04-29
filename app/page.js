"use client";

import { use, useState } from "react";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import { AnimatePresence } from "framer-motion";
import Commerce from "@chec/commerce.js";
import SmokeBg from "@/components/SmokeBg";
import WhiteBackground from "@/components/WhiteBackground";

export default function Home() {
  const [smokeBackground, setSmokeBackground] = useState(false)
  const commerce = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY);

  const getData = async () => {
    try {
      const data = await commerce.products.list();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const products = use(getData());

  return (
    <>
      {products ? (
        <main className={styles.main}>
          <SmokeBg key="background"/>
          <Hero key="hero" />
          <About key="about" />
          <Products key="products" products={products} />
          <Contact />
          <WhiteBackground/>
        </main>
      ) : null}
    </>
  );
}
