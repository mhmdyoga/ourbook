import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarItem from "@/components/NavbarItem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book-Store | | Ourbook",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarItem />
        {children}
        </body>
    </html>
  );
}
