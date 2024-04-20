import { Inter } from "next/font/google";
import "./globals.css";
import { roboto } from "./ui/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ingenia",
  description: "Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
