import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Basak Bible Baptist Church",
  description: "Welcome to Basak Bible Baptist Church - A welcoming community of faith in Lapu-Lapu City, Philippines. Join us for worship, fellowship, and spiritual growth.",
  keywords: ["church", "baptist", "basak", "lapu-lapu", "philippines", "worship", "bible", "christian", "faith", "community"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
