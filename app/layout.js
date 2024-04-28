import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContentWrapper, SiteWrapper } from "@/styles/Containers.styles";
import StyledComponentsRegistry from "@/lib/registry";
import { Gothic_A1} from 'next/font/google'

const gothicA1 = Gothic_A1({subsets: ['latin'], display: 'swap', weight: ['300', '400', '700', '800']})

export const metadata = {
  title: "Stellar Website",
  description: "Stellar Website Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gothicA1.className}`}>
      <body className={`${gothicA1.className}`}>
        <StyledComponentsRegistry>
          <SiteWrapper>
          <Navbar />
            <ContentWrapper>
              {children}
              <Footer />
            </ContentWrapper>
          </SiteWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
