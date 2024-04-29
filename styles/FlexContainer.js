"use client"

import styled from "styled-components";
import { motion } from 'framer-motion'

export const FlexContainer = styled(motion.div)`
  width: 100%;
  padding: ${props => props.$padding || "0 32px"};
  display: flex;
  justify-content: ${props => props.$justifyContent || 'center'};
  align-items: ${props => props.$alignItems || 'center'};
  flex-direction: ${props => props.$direction || 'row'};
  background: ${props => props.$background || "transparent"};
  max-width: ${props => props.$maxWidth || "100%"};
  color: ${props => props.$color || "#FCFCF7"};
  gap: ${props => props.$gap || "0"};
  margin-top: ${props => props.$firstSection ? "64px" : "0"};
  min-height: ${props => props.$minHeight || 'unset'};
  position: ${props => props.$position || 'relative'};
  overflow: ${props => props.$overflow || 'unset'};
  margin: ${props => props.$margin};
  margin-bottom: ${props => props.$marginBottom && props.$marginBottom};
 
  @media(max-width: 900px){
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    padding: ${props => props.$padding || "0 20px"};
    margin-top: ${props => props.$firstSection ? "24px" : "0"};
    margin-bottom: ${props => props.$marginBottom && props.$marginBottom};
    gap: ${props => props.$gap ? props.$gap : "48px"};
  }
  .splide {
    width: 100%;
  }
  .splide__pagination {
    bottom: -30px;
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
`;