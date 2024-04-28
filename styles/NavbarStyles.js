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
  background: rgba(255,255,255,.8);
  backdrop-filter: blur(10px);
  padding: 0 20px;
  /* box-shadow: rgba(0, 17, 51, 0.05) 0px 3px 15px 0px; */
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
  font-size: 30px;
  letter-spacing: 3px;
`