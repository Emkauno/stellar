'use client'
import { motion } from 'framer-motion'
import styled from "styled-components"

export const FooterContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: sticky;
  bottom: 0;
  z-index: 5;
  transition: all .3s ease;
  background: red;
  background: rgba(255,255,255,.7);
  backdrop-filter: blur(10px);
  padding: 32px 20px;
  box-shadow:rgba(0, 17, 51, 0.05) 0px 3px 15px 0px;
`

export const FooterContent = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
export const FooterTitle = styled.span`
  height: 65px;
  letter-spacing: 3px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    position: relative;
  }
`
export const FooterCopyright = styled.div`
  width: 100%;
  letter-spacing: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
    font-weight: 500;
    color: rgb(34,34,34);
  }
`

export const FooterColumn = styled.div`
  max-width: 30%;
  min-width: 20%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h3 {
    color: rgb(34,34,34);
    font-size: 24px;
    font-weight: 800;
  }
  h4 {
    color: rgb(34,34,34);
    font-size: 16px;
    font-weight: 600;
  }
`