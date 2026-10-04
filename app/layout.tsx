import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import NewsTicker from "@/Components/NewsTicker/NewsTicker";
import NewsProvider from "@/Context/NewsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Lora({
  variable: "--font-serif-bn",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bangla News 24",
  icons:{
    icon: '/logo.png'
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-serif">
        <NewsProvider>
          <Navbar />
          <NewsTicker />
            {children}
          <Footer />
        </NewsProvider>
      </body>
    </html>
  );
}
