import Link from 'next/link';
import Image from 'next/image'; // WAJIB ADA: Import komponen Image dari Next.js

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 font-mono text-gray-300">
      
      <div className="border border-purple-900/50 bg-[#0a0a0c] p-10 md:p-16 max-w-3xl w-full text-center relative shadow-[0_0_30px_rgba(168,85,247,0.05)] group hover:border-purple-600/50 transition-colors duration-500 flex flex-col items-center">
        
        {/* Garis Neon Atas */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

        {/* Gambar Logo Dimasukkan ke Sini */}
        <div className="flex justify-center mb-10">
          <Image 
            src="/logo.png" 
            alt="Logo PrimeLog" 
            width={400} 
            height={180} 
            priority 
            className="drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] object-contain"
          />
        </div>
        
        {/* Deskripsi */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12 px-2 md:px-8">
          Sistem pemantauan armada laut terintegrasi dengan kapabilitas realtime tracking. 
          Dirancang khusus dengan antarmuka <i>dark-tech</i> untuk meminimalisir kelelahan visual kru 
          di ruang monitor saat mengawasi posisi kapal, cuaca, dan rute navigasi jarak jauh.
        </p>

        {/* Tombol Masuk */}
        <Link 
          href="/home" 
          className="inline-flex items-center gap-3 border border-cyan-800 bg-cyan-950/40 text-cyan-400 px-8 py-3 text-sm tracking-widest hover:bg-cyan-900/60 hover:text-white transition-all shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        >
          ENTER SYSTEM
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </Link>
      </div>

      <div className="mt-10 text-[10px] text-gray-600 tracking-[0.2em]">
        SYSTEM INITIATED // KELOMPOK 10
      </div>

    </div>
  );
}