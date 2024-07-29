import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "B2B Bajar - Find the best deals for your business",
  description:
    "Find the best deals for your business with B2B Bajar - the best B2B marketplace in Nepal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
