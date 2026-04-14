import Link from 'next/link';
import Image from 'next/image';
import { Globe, Zap, ShieldCheck, Database, Navigation, Monitor } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] pointer-events-none"></div>

      <div className="border border-purple-900/30 bg-[#0a0a0c]/95 backdrop-blur-2xl p-8 md:p-14 max-w-5xl w-full relative shadow-[0_0_80px_rgba(0,0,0,0.8)] rounded-sm">

        <div className="flex justify-between items-center mb-10 border-b border-purple-900/30 pb-6">
          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.3em]">
            System: <span className="text-green-500 animate-pulse">Operational</span> [cite: 54]
          </div>
          <div className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.3em]">
            Ver: 2.0.26_K10
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-48 h-24 mb-6 drop-shadow-[0_0_15px_rgba(188,19,254,0.4)]">
              <Image src="/logo.png" alt="PrimeLog Logo" fill className="object-contain" priority />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-[0.1em] mb-4 uppercase italic leading-tight">
              PRIME<span className="text-[#bc13fe]">LOG</span><br/>FLEET
            </h1>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 font-mono max-w-md">
              Platform intelijen maritim yang dirancang untuk kebutuhan pemantauan armada jarak jauh[cite: 18]. 
              Mengintegrasikan data satelit real-time dengan UI dark-tech yang dioptimalkan untuk ruang monitor rendah cahaya.
            </p>
            <Link 
              href="/login" 
              className="px-12 py-4 bg-[#bc13fe] text-white font-black text-xs tracking-[0.3em] uppercase hover:bg-purple-700 transition-all shadow-[0_10px_40px_rgba(188,19,254,0.3)]"
            >
              Sign In to System
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoCard 
              icon={<Navigation size={20} className="text-cyan-400" />} 
              title="Real-time Tracking" 
              desc="Simulasi pergerakan kapal dengan pembaruan GPS otomatis[cite: 13, 26]." 
            />
            <InfoCard 
              icon={<Database size={20} className="text-purple-500" />} 
              title="Fleet Logs" 
              desc="Penyimpanan data log konsumsi bahan bakar dan histori rute[cite: 40, 41]." 
            />
            <InfoCard 
              icon={<Monitor size={20} className="text-green-500" />} 
              title="Dark-Tech UI" 
              desc="Aksen ungu neon neon untuk visibilitas data maksimal dalam kondisi cahaya redup[cite: 7, 35]." 
            />
            <InfoCard 
              icon={<Zap size={20} className="text-yellow-500" />} 
              title="Analytics" 
              desc="Visualisasi grafik interaktif untuk efisiensi operasional armada[cite: 50]." 
            />
          </div>
        </div>
      </div>

      <div className="mt-10 text-[9px] text-gray-700 tracking-[0.5em] font-bold uppercase text-center space-y-2">
        <p>© 2026 Universitas Atma Jaya Yogyakarta</p>
        <p className="opacity-50 italic">FST - Sistem Informasi - Kelompok 10</p>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, desc }: any) {
  return (
    <div className="bg-black/40 border border-gray-800 p-5 hover:border-purple-500/30 transition-all group">
      <div className="mb-3">{icon}</div>
      <h3 className="text-white text-[10px] font-black uppercase tracking-widest mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
      <p className="text-[9px] text-gray-500 leading-relaxed font-mono">{desc}</p>
    </div>
  );
}