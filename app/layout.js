import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContentWrapper, SiteWrapper } from "@/styles/Containers.styles";
import StyledComponentsRegistry from "@/lib/registry";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata = {
  title: "Stellar Website",
  description: "Stellar Website Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StyledComponentsRegistry>
          <SiteWrapper>
            <ContentWrapper>
              <Navbar />
              {children}
              <Footer />
            </ContentWrapper>
          </SiteWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
