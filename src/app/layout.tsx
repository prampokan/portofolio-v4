import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import { Jacquard_12 } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import NavbarMobile from "@/components/navbar-mobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pramudya Diagusta - Web Developer",
  description:
    "A passionate Web Developer who crafting dynamic and interactive applications",
  icons: {
    icon: "favicon.ico",
  },
};

const jacquard = Jacquard_12({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="w-full flex justify-center py-24 px-5 min-h-screen">
            <div className="w-full max-w-3xl">{children}</div>
          </main>
          <Toaster />
          <Footer />
          <NavbarMobile />
        </ThemeProvider>
      </body>
    </html>
  );
}
