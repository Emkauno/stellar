"use client"

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProductCard = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px;
  min-height: 330px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: rgba(34,34,34);
  overflow: hidden;
  box-shadow: rgba(0, 17, 51, 0.05) 0px 3px 15px 0px;
  cursor: pointer;
 
  img {
    object-fit: contain;
    z-index: 0;
    transform: scale(.85);
    transition: all .3s ease;
    transform-origin: center;
}
  h3 {
    z-index: 1;
    width: 100%;
    padding: 8px 12px;
    bottom: 0; 
    left: 0;
    color: #FCFCF7;
    font-size: 13px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    margin: 20px 0;
    padding: 0 0 0 2px;
  }
  p {
    background: #FCFCF7;
    font-size: 18px;
    color: rgba(34,34,34);
    padding: 4px 8px;
    font-weight: 800;
    position: absolute;
    bottom: 12px;
    left: 12px;
  }
  &:hover {

    img {
      width: 80%;
    }
  }
  @media(max-width: 500px){
    min-height: 300px;
  }
`

export const ProductWindow = styled.div`
  width: 100%;
  height: 200px;  
  aspect-ratio: 1/1;
  overflow: hidden;
  background: white;
  font-family: 'Nunito Sans';
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
  }
  @media(max-width: 768px){
    height: 150px;
  }
`