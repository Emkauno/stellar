import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContentWrapper, SiteWrapper } from "@/styles/Containers.styles";
import StyledComponentsRegistry from "@/lib/registry";
import { Gothic_A1, Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "800"],
});

export const metadata = {
  title: "Stellar Website",
  description: "Stellar Website Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunitoSans.className}`}>
      {/* eliminar suppressHydrationWarning */}
      <body
        className={`${nunitoSans.className}`}
        suppressHydrationWarning={true}
      >
        <StyledComponentsRegistry>
          <SiteWrapper>
            <Navbar />
            <ContentWrapper>{children}</ContentWrapper>
            <Footer />
          </SiteWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
