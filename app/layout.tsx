// import "./globals.css";
// import { Roboto_Mono } from "next/font/google";
// import Navbar from "@/components/navbar"; // Pastikan path ini sesuai tempat Anda menyimpan Navbar

// const roboMono = Roboto_Mono({ subsets: ["latin"] });

// export const metadata = {
//   title: "PrimeLog Fleet - Maritime Intelligence",
//   description: "Advanced vessel tracking system for Captain Yusuf.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="id" suppressHydrationWarning>
//       <body className={`${roboMono.className} bg-[#050507] text-gray-300 antialiased`}>
//         {/* Kontainer Utama */}
//         <div className="flex flex-col min-h-screen">
          
//           {/* Navbar diletakkan di sini agar muncul di atas semua halaman */}
//           <Navbar />

//           {/* Area konten utama (Home, Map, Analytics) */}
//           <main className="flex-1 overflow-y-auto overflow-x-hidden">
//             {children}
//           </main>

//           {/* Footer Opsional untuk memperkuat identitas Kelompok 10 */}
//           <footer className="bg-[#0a0a0c] border-t border-gray-900 py-4 px-6 text-center">
//              <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.5em]">
//                © 2026 PrimeLog Systems // FST Sistem Informasi UAJY // K10
//              </p>
//           </footer>
          
//         </div>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Navbar from "@/components/navbar"; 

const roboMono = Roboto_Mono({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${roboMono.className} bg-[#050507] text-gray-300 antialiased`}>
        <div className="flex flex-col min-h-screen">
          
          <Navbar />

          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}