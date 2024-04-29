'use client'
import { motion } from 'framer-motion'
import styled from "styled-components"

export const NavbarContainer = styled(motion.div)`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  transition: all .3s ease;
  background: ${({$scrolled}) => $scrolled ? "rgba(255,255,255,.7)" : "transparent"};
  backdrop-filter: ${({$scrolled}) => $scrolled ? 'blur(10px)' : 'blur(0)'};
  padding: 0 20px;
  box-shadow: ${({$scrolled}) => $scrolled ?  'rgba(0, 17, 51, 0.05) 0px 3px 15px 0px' : "none"};
`

export const NavbarContent = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`
export const NavbarTitle = styled.span`
  height: 65px;
  width: 100%;
  letter-spacing: 3px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    position: relative;
  }
`