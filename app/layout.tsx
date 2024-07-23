import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Hut",
  description: "Food Hut is a brand that has so many restaurants with a variety of different food.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <main className="relative overflow-hidden">
        {children}
      </main>
      <Footer/>
      </body>
    </html>
  );
}
