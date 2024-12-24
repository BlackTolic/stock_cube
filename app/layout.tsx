import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavLinks } from "@/app/ui/nav-links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 页面标题
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// 根布局在 app 目录的顶层定义，并应用于所有路由。此布局是**必填**的，并且必须包含 html 和 body 标签，允许你修改从服务器返回的初始 HTML
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        root/layout
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
