import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../@/components/Navbar";
import Footer from "../@/components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "BiratazzarB2B- Find the best deals for your business",
  description:
    "Find the best deals for your business with B2B Bajar - the best B2B marketplace in Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
