"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

export const HeroTitle = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-top: 100px;
    @media (max-width: 750px) {
      margin-top: 0;
    }
    @media (max-width: 750px) {
      margin-top: 100px;
    }
  h1 {
    width: 100%;
    @media (max-width: 750px) {
      span:nth-child(2) {
        font-size: 40px;
        text-align: center;
      }
    }
    @media (max-width: 500px) {
      span:nth-child(2) {
        font-size: 30px;
        text-align: center;
      }
    }
  }
  span {
    width: 100%;
    font-weight: 200;
    font-size: 65px;
    text-align: center;
    display: block;
    line-height: 120%;
    @media (max-width: 1000px) {
      font-size: 50px;
    }

    @media (max-width: 750px) {
      font-size: 50px;
    }
  

    @media (max-width: 750px) {
      text-align: center;
      width: 100%;
      line-height: 52px;
      &:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          text-align: center;
        }
      }
    }
    @media (max-width: 500px) {
      font-size: 40px;
      line-height: 40px;
    }
    @media (max-width: 480px) {
      font-size: 50px;
      line-height: 50px;
    }
    @media (max-width: 400px) {
      font-size: 40px;
      line-height: 50px;
    }

    &.bold {
      font-weight: 800;
      display: inline;
      @media(max-width: 750px){
        text-decoration: none;
        text-underline-offset: 15px;
      }
      @media(max-width: 500px){
        text-underline-offset: 10px;
      }
    }
    &.kicker {
      font-size: 16px;
      font-weight: 800;
      display: flex;
      width: unset;
      color: #fcfcf7;
      background: rgb(34,34,34);
      padding: 4px 8px;
      line-height: 20px;
      margin-top: 20px;
      @media (max-width: 780px) {
        position: relative;
        font-size: 14px;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      @media (max-width: 400px) {
        position: relative;
        font-size: 4vw;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export const Gradient = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  z-index: 2;
`

export const HeroImagesContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 750px) {
    flex-direction: column;
    transform: translateY(-125px);
  }
  @media (max-width: 450px) {
    transform: translateY(-100px);
  }
`;

export const HeroImageHolder = styled(motion.div)`
  display: flex;
  position: relative;
  width: 32%;
  min-height: 600px;
  @media (max-width: 700px) {
    width: 100%;
    min-height: unset;
    &:not(:last-child){
      margin-bottom: 10px;
    }
  }
  @media (max-width: 400px) {
      max-height: 140px;
  }
  img {
    filter: contrast(1.2);
    object-fit: cover;
    box-shadow: rgba(0, 17, 51, 0.1) 0px 3px 15px 0px;
  }
  &:first-child {
    transform: translateX(30px) translateY(20px);
    @media (max-width: 700px) {
      transform: translateX(0px) translateY(0px);
      height: 200px;
    }
  }
  &:nth-child(2) {
    transform: scale(1.15);
    z-index: 2;
    @media (max-width: 700px) {
      transform: scale(1) translateY(0);
      height: 200px;
    }
    @media (max-width: 400px) {

    }
  }
  &:last-child {
    transform: translateX(-30px) translateY(20px);
    @media (max-width: 700px) {
      transform:translateX(0px) translateY(0px);
      height: 200px;
    }
    @media (max-width: 400px) {
   
    }
  }
`;

export const MbBackground = styled(motion.div)`
  width: 100vw;
  position: absolute;
  top: 0;
  height: 100%;
  background:url('/background.jpg');
  -webkit-mask-image: linear-gradient(transparent, rgba(255,255,255,.5), transparent);
  background-size: cover;
  background-position: top;
  z-index: -2;
  opacity: 1;
`