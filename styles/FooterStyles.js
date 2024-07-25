'use client'
import { motion } from 'framer-motion'
import styled from "styled-components"

export const FooterContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  @media(max-width: 600px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
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
export const FooterCopyright = styled.p`
  max-width: 1200px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  color: rgb(34,34,34);
  @media(max-width: 600px){
    align-items: center;
    justify-content: center;
    padding-top: 32px;
  }
`
export const FooterInfo = styled.p`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: rgb(34,34,34);
`

export const FooterColumn = styled.div`
  min-width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
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