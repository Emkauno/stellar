import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SmokeContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -3;
  opacity: ${({$background}) => $background === true ? ".3" : "0"};
  transition: opacity 2s ease;
  filter: invert(1);
  @media(max-width: 500px){
    display: none;
  }
`
export const WhiteBg = styled.div`
  width: 100vw;
  height: 100vh; 
  position: fixed;
  z-index: -4;
  background: #fcfcf7;
`