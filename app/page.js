import Image from "next/image";
import styles from "./page.module.css";
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <About/>
      <Products/>
      <Contact/>
    </main>
  );
}
