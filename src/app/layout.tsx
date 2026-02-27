import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { isFullSiteEnabled } from "@/lib/feature-flags";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santiago Moreno - SanatorDev",
  description: "Senior Full Stack Developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fullSiteEnabled = isFullSiteEnabled();

  return (
    <html lang="en">
      <body className="min-h-screen">
        {fullSiteEnabled ? (
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        ) : (
          <main className="min-h-screen">{children}</main>
        )}
      </body>
    </html>
  );
}
