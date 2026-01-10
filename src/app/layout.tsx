import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Or your fonts
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ikmann Bhullar | Software Engineer",
  description: "Full Stack Developer based in Seattle. Specializing in scalable systems, modern UI, and backend architecture.",
  keywords: ["Software Engineer", "Full Stack", "React", "Next.js", "Seattle", "Portfolio"],
  openGraph: {
    title: "Ikmann Bhullar | Software Engineer",
    description: "Building scalable systems and engaging digital experiences.",
    url: "https://your-portfolio-url.vercel.app", // Update this after deployment!
    siteName: "Ikmann Bhullar Portfolio",
    images: [
      {
        url: "../../public/profile.png", // We can create this next!
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}