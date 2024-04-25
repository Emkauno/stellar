'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Contact from '@/components/Contact'
import { AnimatePresence } from "framer-motion";
import commerce from "../lib/commerce"

function Home(props) {
  console.log(props)
  const { merchant, products } = props
  return (
    <main className={styles.main}>
      <AnimatePresence>
      <Hero key="hero"/>
      <About key="about"/>
      <Products key="products" products={products}/>
      <Contact key="contact"/>
      </AnimatePresence>
    </main>
  );
}

Home.getStaticProps = async() => {
  const merchant = await commerce.merchants.about();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      products,
    },
  };
}

export default Home