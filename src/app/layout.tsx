import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Love2Learn AI Kids School 🌟 | Where Little Stars Shine Bright!",
  description:
    "A magical preschool for ages 1.5 to 5 years. Nurturing young minds through play, creativity, and love. Programs: Playgroup, Nursery, LKG & UKG.",
  keywords: [
    "preschool",
    "kindergarten",
    "kids school",
    "playgroup",
    "nursery",
    "LKG",
    "UKG",
    "early childhood education",
    "Hyderabad preschool",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-white">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "20px",
              background: "#fff",
              color: "#333",
              fontFamily: "Nunito, sans-serif",
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
