"use client";
import {
  FooterContainer,
  FooterContent,
  FooterTitle,
  FooterColumn,
  FooterInfo,
  FooterCopyright,
} from "@/styles/FooterStyles";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>
            <Image src="/logo.svg" width={130} height={65} alt="stellar-logo" />
          </FooterTitle>
        </FooterColumn>
        <FooterColumn>
          <FooterInfo>
            <Image src="/email.svg" width={16} height={16} />
            ventas@stellartienda.cl
          </FooterInfo>
          <FooterInfo>
            <Image src="/whatsapp.png" width={18} height={18} />
            +56 9 8326 9643
          </FooterInfo>
        </FooterColumn>
      </FooterContent>
      <FooterCopyright>
        Todos los derechos reservados © 2024 Stellar
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
