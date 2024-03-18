import type { Metadata } from "next";
import { Artifika } from "next/font/google";
import "@styles/globals.css";

const artifika = Artifika({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "zopee",
  description: "Change the way you interact with LinkedIn with zopee.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/next.svg",
        href: "/next.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/next.svg",
        href: "/next.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={artifika.className}>{children}</body>
    </html>
  );
}
