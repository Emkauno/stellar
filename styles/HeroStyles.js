'use client'
import { motion } from 'framer-motion'
import styled from "styled-components"

export const HeroTitle = styled(motion.div)`
  width: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  h1 {
    width: 100%;
  }
  span {
    width: 100%;
    font-weight: 200;
    font-size: 80px;
    text-align: left;
    display: block;
    &:last-child{
      text-align: right;
    }
    &.bold {
    font-weight:800;
    display: inline;
    }
    &.kicker{
      position: absolute;
      left: 0;
      top: -16px;
      font-size: 16px;
      font-weight: 800;
      display: flex;
      width: unset;
      color: #FCFCF7;
      background: rgba(34,34,34);
      padding: 4px 8px;
    }
    &.kicker-two {
      position: absolute;
      right: 0;
      bottom: -24px;
      font-size: 16px;
      font-weight: 800;
      display: flex;
      width: unset;
      color: #FCFCF7;
      background: rgba(34,34,34);
      padding: 4px 8px;
    }
  }
`

export const HeroImagesContainer = styled(motion.div)`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;

`

export const HeroImageHolder = styled(motion.div)`
  display: flex;
  position: relative;
  height: 600px;
  width: 32%;
  img {
    filter: contrast(1.2);
    object-fit: cover;
    box-shadow: rgba(0, 17, 51, 0.1) 0px 3px 15px 0px;
  }
    &:first-child {
      transform: rotate(-10deg) translateX(30px) translateY(20px);
    }
    &:nth-child(2) {
      transform: scale(1.15);
      z-index: 2;
    }
     &:last-child {
      transform: rotate(10deg) translateX(-30px) translateY(20px);
    }
`