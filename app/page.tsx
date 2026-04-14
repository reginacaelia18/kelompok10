import Link from 'next/link';
import Image from 'next/image';
import { Globe, Zap, ShieldCheck, Database, Navigation, Monitor, ArrowRight, Anchor } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center p-6 relative overflow-hidden font-mono">
      {/* Ambient Visual Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/5 blur-[160px] pointer-events-none"></div>
      
      {/* Decorative Moving Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#bc13fe 1px, transparent 1px), linear-gradient(90deg, #bc13fe 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="border border-purple-900/30 bg-[#0a0a0c]/95 backdrop-blur-3xl p-8 md:p-14 max-w-6xl w-full relative shadow-[0_0_100px_rgba(0,0,0,0.8)] rounded-sm group">
        
        {/* Top Status Bar */}
        <div className="flex justify-between items-center mb-12 border-b border-purple-900/20 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-[9px] text-gray-400 font-black uppercase tracking-[0.4em]">System Status: Operational</span>
          </div>
          <div className="hidden md:block text-[9px] text-gray-600 font-black uppercase tracking-[0.4em]">
            Deployment: Terminal_UAJY_K10
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Branding & CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-56 h-28 mb-8 drop-shadow-[0_0_20px_rgba(188,19,254,0.4)] transition-transform duration-700 group-hover:scale-105">
              <Image src="/logo.png" alt="PrimeLog Logo" fill className="object-contain" priority />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-[0.1em] mb-6 uppercase italic leading-none">
              PRIME<span className="text-[#bc13fe]">LOG</span><br/>
              <span className="text-3xl md:text-4xl">FLEET UNIT</span>
            </h1>

            <div className="h-1 w-20 bg-[#bc13fe] mb-8"></div>
            
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-10 font-mono max-w-md border-l-2 border-purple-900/50 pl-6">
              Sistem manajemen armada laut mutakhir yang mengintegrasikan telemetri satelit dengan 
              antarmuka visibilitas tinggi. Dioptimalkan untuk lingkungan Command Center 
              guna mendukung kru dalam pengawasan operasional 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Link 
                href="/login" 
                className="group flex items-center justify-center gap-3 px-12 py-5 bg-[#bc13fe] text-white font-black text-xs tracking-[0.3em] uppercase hover:bg-purple-700 transition-all shadow-[0_10px_40px_rgba(188,19,254,0.3)] relative overflow-hidden"
              >
                <span className="relative z-10">Sign In to Access</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
          </div>

          {/* Right Column: Informative Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-purple-600/5 blur-3xl rounded-full"></div>
            
            <FeatureCard 
              icon={<Navigation size={24} className="text-cyan-400" />} 
              title="Real-time Tracking" 
              desc="Visualisasi posisi armada di peta dunia dengan pembaruan koordinat periodik melalui satelit." 
            />
            <FeatureCard 
              icon={<Database size={24} className="text-purple-500" />} 
              title="Fleet Logs" 
              desc="Audit log terpusat untuk memantau histori perjalanan dan konsumsi bahan bakar." 
            />
            <FeatureCard 
              icon={<Monitor size={24} className="text-green-500" />} 
              title="Dark-Tech UI" 
              desc="Desain kontras tinggi yang dirancang khusus untuk mengurangi kelelahan mata kru." 
            />
            <FeatureCard 
              icon={<Zap size={24} className="text-yellow-500" />} 
              title="Smart Analytics" 
              desc="Dashboard performa yang menyajikan grafik efisiensi operasional secara intuitif." 
            />
          </div>
        </div>

        {/* Bottom Decorative Bar */}
        <div className="mt-16 pt-8 border-t border-purple-900/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-white font-black text-lg italic tracking-widest">24/7</p>
              <p className="text-[8px] text-gray-600 uppercase font-bold tracking-widest">Monitoring</p>
            </div>
            <div className="text-center">
              <p className="text-white font-black text-lg italic tracking-widest">100%</p>
              <p className="text-[8px] text-gray-600 uppercase font-bold tracking-widest">Secure Link</p>
            </div>
          </div>
          <div className="text-right flex items-center gap-4 bg-white/5 px-4 py-2 rounded-sm border border-white/5">
            <Anchor size={16} className="text-[#bc13fe]" />
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
              Maritime Standard Protocol Applied
            </p>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 text-[9px] text-gray-700 tracking-[0.5em] font-bold uppercase text-center leading-loose">
        <p>© 2026 PrimeLog Maritime Intelligence System</p>
        <p className="opacity-60 italic">FST - Universitas Atma Jaya Yogyakarta - Kelompok 10</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-black/40 border border-gray-800/50 p-6 hover:border-[#bc13fe]/40 transition-all group relative z-10 backdrop-blur-sm">
      <div className="mb-4 p-3 bg-white/5 w-fit rounded-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-white text-[11px] font-black uppercase tracking-[0.2em] mb-3 group-hover:text-[#bc13fe] transition-colors italic">
        {title}
      </h3>
      <p className="text-[10px] text-gray-500 leading-relaxed font-mono italic">
        {desc}
      </p>
    </div>
  );
}