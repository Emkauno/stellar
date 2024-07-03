"use client"

import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductsContainer = styled(motion.div)`
  width: 100%;
  padding: ${props => props.$padding || "64px 32px"};
  display: flex;
  justify-content: ${props => props.$justifyContent || 'center'};
  align-items: ${props => props.$alignItems || 'center'};
  flex-direction: ${props => props.$direction || 'row'};
  background: ${props => props.$background || "transparent"};
  max-width: ${props => props.$maxWidth || "100%"};
  color: ${props => props.$color || "var(--primaryColor)"};
  gap: ${props => props.$gap || "0"};
  margin-top: ${props => props.$firstSection ? "64px" : "0"};
  min-height: ${props => props.$minHeight || 'unset'};
  position: ${props => props.$position || 'relative'};
  overflow: ${props => props.$overflow || 'unset'};
  margin: ${props => props.$margin};
  @media(max-width: 900px){
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    padding: ${props => props.$padding || "32px 20px"};
    margin-top: ${props => props.$firstSection ? "24px" : "0"};
    gap: ${props => props.$gap ? props.$gap : "48px"};
  }

  .splide {
    width: 100%;
  }
  .splide--loop {
    
  }
  .splide__pagination {
    bottom: -50px;
    @media(max-width: 900px){
      bottom: -30px;
    }
  }
  .splide__pagination__page.is-active {
    background: rgb(34,34,34);
  }

  /* .splide__track {
    -webkit-mask-image: linear-gradient(to right,transparent 1.5% , #FFFFFF 8%, #FFFFFF 92%, transparent 99.5%);
    @media(max-width: 750px){
      -webkit-mask-image: none;
    }
  } */

  .splide__arrow.splide__arrow--prev {
    transform: translateX(-60px) translateY(-55%) scale(1.5);
    background: transparent;
    transition: all .3s ease;
    width: 20px;
    height: 20px;
    &:hover {
    transform: translateX(-60px) translateY(-55%) scale(2);
    }
    svg {
      width: 100%
    }
    @media(max-width: 1300px){
      transform: translateX(-40px) translateY(-55%) scale(2);
      &:hover {
      transform: translateX(-40px) translateY(-55%) scale(2);
      }
    }
    
    @media(max-width: 768px){
      background: #fcfcf7;
      opacity: 1;
      border: 1px solid rgba(0,0,0,.2);
      svg {
        fill: rgb(34,34,34);
      }
      transform: translateX(-10px) translateY(-55%) scale(2);
      &:hover {
      transform: translateX(-10px) translateY(-55%) scale(2);
      }
    }
  }
  .splide__arrow.splide__arrow--next {
    transform: translateX(80px) translateY(-55%) scale(1.5);
    background: transparent;
    transition: all .3s ease;
    width: 20px;
    height: 20px;
    &:hover {
      transform: translateX(80px) translateY(-55%) scale(2);
    }
    svg {
      width: 100%;
    }
    @media(max-width: 1300px){
      transform: translateX(40px) translateY(-55%) scale(2);
      &:hover {
      transform: translateX(40px) translateY(-55%) scale(2);
      }
    }
    @media(max-width: 768px){
      background: #fcfcf7;
      opacity: 1;
      border: 1px solid rgba(0,0,0,.2);
      svg {
        fill: rgb(34,34,34);
      }
      transform: translateX(10px) translateY(-55%) scale(2);
      &:hover {
      transform: translateX(10px) translateY(-55%) scale(2);
      }
    }
  }
  
  .logo-navbar {
    filter: brightness(11);
  }

  img {
    width: 100%;
  }

  .logo {
    width: 120px;
  }

  h2 {
    &.products-header {
      color: #fcfcf7;
      background: rgb(34,34,34);
      font-size: 45px;
      margin-bottom: 32px;
      padding: 8px 16px;
      font-weight: 200;
      text-transform: uppercase;
      @media(max-width: 750px){
        font-size: 5vw;
        margin-bottom: 0;
      }
      @media(max-width: 500px){
        font-size: 8vw;
      }
    }
  }
  h1 {
    color: var(--primaryColor);
    text-align: center;
    span {
      color: var(--secondaryColor);
    }
  }
    form {
    width: 100%
  }
`