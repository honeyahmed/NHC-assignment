import { Abel, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const abel = Abel({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-abel",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "NHC",
  description: "A modern e-commerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${abel.variable} ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col `}
      >
        <Navbar /> <main className="flex-1 w-full min-h-[calc(100vh-100px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
