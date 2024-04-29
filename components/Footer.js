"use client";
import {
  FooterContainer,
  FooterContent,
  FooterTitle,
  FooterColumn,
  FooterCopyright,
} from "@/styles/FooterStyles";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTitle>
          <Image src="/logo.svg" width={130} height={65} alt="stellar-logo" />
        </FooterTitle>
        <FooterCopyright>
         Todos los derechos reservados © 2024 Stellar
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
