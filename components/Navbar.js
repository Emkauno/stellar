'use client'
import { useState, useEffect } from 'react';
import { NavbarContainer, NavbarContent, NavbarTitle } from "@/styles/NavbarStyles";
import Image from 'next/image';

const useDebouncedScroll = (delay) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isScrolled = window.scrollY > 65;
    isScrolled && setScrolled(true)
  }, []);

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 65;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      if (isScrolled) {
        clearTimeout(timeoutId);
      } else {
        timeoutId = setTimeout(() => {
          setScrolled(window.scrollY > 65);
        }, delay);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };

  }, [scrolled, delay]);

  return scrolled;
};

const Navbar = () => {
  const scrolled = useDebouncedScroll(200);

  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavbarContent>
        <NavbarTitle><Image src="/logo.svg" width={130} height={65} alt="stellar-logo"/></NavbarTitle>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
