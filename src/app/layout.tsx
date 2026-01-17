import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import SpotlightPreview from "@/components/SpotlightPreview";

const inter = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Prakash Pandey",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-[100%]`}>
        {/* Move ThemeProvider INSIDE body, not wrapping html */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SpotlightPreview />
          <Navbar />
          <div>{children}</div>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
