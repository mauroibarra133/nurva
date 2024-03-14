import type { Metadata } from "next";
import { AOSInit } from './../app/ui/aos'

import "./globals.css";
import Nav from "@/app/pages/landing/header/Header";
import { jost } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Nurva",
  description: "Tu exito en ventas",
  keywords : ["tienda","venta","catalogo","ecommerce",""]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit></AOSInit>
      <body className={` ${jost.className} `} >
        <Nav></Nav>
        {children}</body>
    </html>
  );
}
