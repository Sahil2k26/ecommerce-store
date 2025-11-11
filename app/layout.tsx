import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { ModalProvider } from "@/providers/modal-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SidebarWrapper from "@/components/sidebar-wrapper";

const font = Urbanist({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: process.env.StoreName,
  description: "Your one-stop shop for all things tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <ModalProvider />
        <ToastProvider />
        <SidebarProvider>
          <SidebarWrapper />
          <SidebarInset>
            <Navbar />
            {children}
            <Footer />
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}