import Link from 'next/link';
import Image from 'next/image';
import { 
  Globe, Zap, ShieldCheck, Database, Navigation, 
  Monitor, ArrowRight, Anchor, Target, Building2, 
  Server, ShieldAlert, Cpu, Info, Activity
} from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#050507] text-gray-300 font-mono selection:bg-[#bc13fe]/30">
      
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden border-b border-gray-900">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/5 blur-[160px] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(#bc13fe 1px, transparent 1px), linear-gradient(90deg, #bc13fe 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
        </div>

        <div className="border border-purple-900/30 bg-[#0a0a0c]/90 backdrop-blur-3xl p-10 md:p-16 max-w-5xl w-full relative shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-sm">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block px-3 py-1 border border-[#bc13fe]/50 text-[#bc13fe] text-[9px] font-black uppercase tracking-[0.4em] mb-6">
                Operational Status: Secure // 2026
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase italic leading-none">
                PRIME<span className="text-[#bc13fe]">LOG</span>
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md italic border-l-2 border-purple-500 pl-4">
                Advanced Maritime Intelligence & Fleet Telemetry. Membangun masa depan logistik laut dengan data presisi tinggi untuk operasional global.
              </p>
              <Link href="/login" className="inline-flex items-center gap-3 px-12 py-5 bg-[#bc13fe] text-white font-black text-[10px] tracking-[0.3em] uppercase hover:bg-purple-700 transition-all shadow-[0_0_30px_rgba(188,19,254,0.3)] group">
                Initialise Terminal <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            {/* UKURAN GAMBAR/IKON DIPERBESAR (Size 340) */}
            <div className="hidden lg:block relative opacity-20">
               <Anchor size={340} className="text-[#bc13fe] animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2 bg-purple-500/10 border border-purple-500/30">
                <Info className="text-[#bc13fe]" size={20} />
              </div>
              <h2 className="text-2xl font-black text-white uppercase tracking-[0.2em] italic">About PrimeLog</h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 italic">
              Didirikan oleh inisiatif teknis Kelompok 10 UAJY, PrimeLog Fleet adalah sistem kontrol armada terpadu yang dirancang untuk menjawab tantangan navigasi modern.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Kami menggabungkan algoritma pemrosesan data satelit dengan antarmuka visibilitas tinggi untuk memberikan kontrol penuh kepada operator darat. Fokus kami adalah akurasi, kecepatan data, dan keamanan siber maritim.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
             <InfoCard icon={<ShieldCheck size={20} className="text-green-500" />} title="Military Grade" desc="Protokol enkripsi 256-bit AES untuk setiap transmisi data." />
             <InfoCard icon={<Zap size={20} className="text-yellow-500" />} title="Real-time Link" desc="Latensi rendah dengan sinkronisasi satelit konstan." />
             <InfoCard icon={<Database size={20} className="text-cyan-500" />} title="Fleet Logging" desc="Pengarsipan histori rute dan konsumsi BBM otomatis." />
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#07070a] border-y border-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="p-10 border border-purple-900/20 bg-gradient-to-br from-purple-900/5 to-transparent relative group">
            <Target className="text-[#bc13fe] mb-8" size={40} />
            <h2 className="text-2xl font-black text-white uppercase mb-6 tracking-[0.2em] italic">Strategic Vision</h2>
            <p className="text-gray-400 text-sm leading-loose italic">
              "Menjadi standar emas global dalam ekosistem intelijen maritim digital, mewujudkan transparansi data laut yang mutlak untuk mendukung terciptanya jalur perdagangan dunia yang lebih cerdas pada tahun 2030."
            </p>
          </div>

          <div className="p-10 border border-gray-800 bg-[#0a0a0c] relative group">
            <Activity className="text-cyan-400 mb-8" size={40} />
            <h2 className="text-2xl font-black text-white uppercase mb-6 tracking-[0.2em] italic">Our Mission</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-cyan-400 font-black text-[10px]">01.</span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                  <strong className="text-white">Data Integrity:</strong> Menjamin akurasi posisi armada hingga margin error 0.1%.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-cyan-400 font-black text-[10px]">02.</span>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                  <strong className="text-white">Eco-Optimization:</strong> Mengurangi jejak karbon melalui rute pelayaran paling efisien.
                </p>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Server className="mx-auto text-[#bc13fe] mb-4" size={32} />
          <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] italic">Global Infrastructure</h2>
          <p className="text-[9px] text-gray-600 mt-2 uppercase tracking-widest font-bold italic">Tier-4 Network Backbone</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-gray-900 bg-[#08080a] hover:border-purple-500/50 transition-all">
            <h4 className="text-white font-black text-xs uppercase mb-3 tracking-widest italic">Data Centers</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">Distribusi server di 12 zona maritim internasional guna menjamin ketersediaan akses terminal 24/7.</p>
          </div>
          <div className="p-8 border border-gray-900 bg-[#08080a] hover:border-purple-500/50 transition-all">
            <h4 className="text-white font-black text-xs uppercase mb-3 tracking-widest italic">Compliance</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">Terakreditasi IMO (International Maritime Organization) dan standar ISO 27001 untuk keamanan informasi.</p>
          </div>
          <div className="p-8 border border-gray-900 bg-[#08080a] hover:border-purple-500/50 transition-all">
            <h4 className="text-white font-black text-xs uppercase mb-3 tracking-widest italic">Partners</h4>
            <p className="text-[10px] text-gray-500 leading-relaxed">Bekerja sama dengan FST UAJY dan aliansi logistik global untuk pengembangan teknologi berkelanjutan.</p>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-gray-900 text-center bg-[#07070a]">
        <div className="flex justify-center gap-8 mb-6 opacity-30">
           <Building2 size={16} />
           <Monitor size={16} />
           <ShieldAlert size={16} />
        </div>
        <p className="text-[10px] text-gray-700 tracking-[0.5em] font-bold uppercase mb-2">
          © 2026 PrimeLog Fleet // Kelompok 10 SI UAJY
        </p>
        <p className="text-[8px] text-gray-800 uppercase tracking-widest italic">Advanced Vessel Tracking Interface v2.0.26</p>
      </footer>

    </div>
  );
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-[#0a0a0c] border border-gray-800 p-6 flex gap-6 items-start hover:border-[#bc13fe]/30 transition-all group">
      <div className="mt-1 group-hover:scale-110 transition-transform">{icon}</div>
      <div>
        <h4 className="text-white text-[11px] font-black uppercase tracking-widest mb-1 italic">{title}</h4>
        <p className="text-[10px] text-gray-600 leading-relaxed font-mono italic">{desc}</p>
      </div>
    </div>
  );
}