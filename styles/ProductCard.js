"use client"

import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProductCard = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 12px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: rgba(34,34,34);
  overflow: hidden;
  box-shadow: rgba(0, 17, 51, 0.05) 0px 3px 15px 0px;
  cursor: pointer;
  &:hover {
    img {
      transform: scale(.9);
    }
  }
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
    height: 60px;
    padding: 8px 12px;
    position: absolute;
    bottom: 0; 
    left: 0;
    color: #FCFCF7;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

export const ProductWindow = styled.div`
  width: 100%;
  height: 150px;  
  aspect-ratio: 1/1;
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  position: relative;
  overflow: hidden;
  background: #FCFCF7;
  font-family: 'Nunito Sans';
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0; 
    left: 0;
    background: ${({$image}) => `url(${$image})` || "red"}, #FCFCF7;
    background-size: 100%;
    background-position: center;
    transform: scale(.8);
    transition: all .3s ease;
  }
  &:hover {
    &::before{
      transform: scale(.9);
    }
  }
`