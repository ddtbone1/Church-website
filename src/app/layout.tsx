import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 antialiased flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
