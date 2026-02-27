import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant_garamond = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "600"] 
});

export const metadata: Metadata = {
  title: "Matthew Chou",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cormorant_garamond.className}>{children}</body>
    </html>
  );
}
