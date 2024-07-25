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

export const ModalContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0; 
  left: 0;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
  padding: 80px;
  @media(max-width: 500px){
    width: 100%;
    padding: 0;
  }
`

export const Modal = styled.div`
  padding: 32px;
  border-radius: 24px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding-top: 80px;
  position: relative;
  @media(max-width: 500px){
    border-radius: 0;
    width: 100%;
    padding-top: 50px;
    height: 100vh;
  }

  h3 {
    font-size: 18px;
    text-transform: uppercase;
    padding: 10px;
    color: white;
    background: rgb(34, 34, 34);
    text-align: left;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
  span {
    font-size: 20px;
    font-weight: 800;
    width: 100%;
    color: rgb(34,34,34)
  }
  .close-btn {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`

export const ModalInfo = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 24px;
  @media(max-width: 768px){
    flex-direction: column;
    max-height: 100%;
  }
  .modal-img-container {
    max-width: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    img {
      width: 100%;
    }
    @media(max-width: 768px){
    img {
      height: 100%;
      width: unset;
      }
    }
  }
  
  .item-details {
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 24px;
    span {
      padding-bottom: 12px;
      border-bottom: 1px solid #ccc;
    }
    .item-text {
      margin-top: -12px;
      max-height: 400px;
      overflow-y: auto;
      ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    border: 3px solid transparent; /* creates space around the thumb */
    background-clip: padding-box; /* keeps the thumb rounded within its space */
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  /* Style for Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.4) transparent;

  &:hover {
    /* Only show scrollbar when hovering */
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  /* Optional - Smooth scrolling */
  -webkit-overflow-scrolling: touch;

    }
    @media(max-width: 500px){
    height: 380px;
  }
  }
`