import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const roboMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "PrimeLog Fleet - Maritime Intelligence",
  description: "Advanced vessel tracking system for Captain Yusuf.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${roboMono.className} bg-[#050507] text-gray-300 antialiased`}>
        {children}
      </body>
    </html>
  );
}