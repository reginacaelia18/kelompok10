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
  return ( {/* --- WEATHER OVERLAY LAYER --- */}
{WEATHER_REGIONS.map((w) => (
  <div 
    key={w.id}
    className="absolute transition-all duration-1000 group/weather"
    style={{ left: `${w.lng}%`, top: `${w.lat}%` }}
  >
    <div className="relative -translate-x-1/2 -translate-y-1/2">
      {/* Ikon Cuaca Berdenyut */}
      <div className="flex flex-col items-center">
        <div className="p-1.5 bg-black/40 border border-cyan-500/30 rounded-full backdrop-blur-md animate-pulse">
          {w.condition === 'Stormy' ? <Wind size={14} className="text-cyan-400"/> : <Sun size={14} className="text-yellow-400"/>}
        </div>
        
        {/* Detail Cuaca saat di-Hover */}
        <div className="absolute top-8 bg-[#050508]/90 border border-cyan-500/50 p-3 opacity-0 group-hover/weather:opacity-100 transition-all z-50 min-w-[120px] shadow-[0_0_20px_rgba(0,243,255,0.2)]">
          <p className="text-[9px] font-black text-cyan-400 uppercase tracking-tighter mb-1 border-b border-cyan-900 pb-1">{w.name}</p>
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[8px]">
              <span className="text-gray-500 italic">TEMP</span>
              <span className="text-white">{w.temp}°C</span>
            </div>
            <div className="flex justify-between items-center text-[8px]">
              <span className="text-gray-500 italic">WIND</span>
              <span className="text-white">{w.wind}</span>
            </div>
            <div className="flex justify-between items-center text-[8px]">
              <span className="text-gray-500 italic">COND</span>
              <span className="text-cyan-300 font-bold uppercase">{w.condition}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
    <div className="bg-black/40 border border-gray-800 p-5 hover:border-purple-500/30 transition-all group">
      <div className="mb-3">{icon}</div>
      <h3 className="text-white text-[10px] font-black uppercase tracking-widest mb-2 group-hover:text-purple-400 transition-colors">{title}</h3>
      <p className="text-[9px] text-gray-500 leading-relaxed font-mono">{desc}</p>
    </div>
  );
}"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { 
  Activity, Map, BarChart3, Settings, PlusSquare, 
  FileText, Wind, Sun, Thermometer, Navigation, CloudLightning
} from 'lucide-react';

const INITIAL_VESSELS = [
  { id: 'PL-001', name: 'NUSANTARA PRIMA', lat: 35, lng: 25, status: 'en route' },
  { id: 'PL-002', name: 'SAMUDERA JAYA', lat: 45, lng: 65, status: 'in port' },
  { id: 'PL-003', name: 'GARUDA LAUT', lat: 75, lng: 20, status: 'delayed' },
  { id: 'PL-004', name: 'TANJUNG EMAS', lat: 60, lng: 45, status: 'en route' },
  { id: 'PL-005', name: 'PACIFIC HORIZON', lat: 25, lng: 80, status: 'maintenance' },
  { id: 'PL-006', name: 'RIMBA RAYA', lat: 50, lng: 85, status: 'in port' },
];

// MOCK DATA CUACA
const WEATHER_REGIONS = [
  { id: 'W1', name: 'North Sea Corridor', temp: 18, condition: 'Stormy', wind: '28 knots', lat: 20, lng: 15 },
  { id: 'W2', name: 'Java Sea Basin', temp: 31, condition: 'Clear', wind: '5 knots', lat: 65, lng: 75 },
  { id: 'W3', name: 'Pacific Trade Route', temp: 24, condition: 'Windy', wind: '18 knots', lat: 40, lng: 40 },
];

export default function LiveTrackingMap() {
  const router = useRouter();
  const [vessels, setVessels] = useState(INITIAL_VESSELS);

  useEffect(() => {
    const interval = setInterval(() => {
      setVessels(prev => prev.map(v => ({
        ...v,
        lat: v.status === 'en route' ? v.lat + (Math.random() - 0.5) * 0.3 : v.lat,
        lng: v.status === 'en route' ? v.lng + (Math.random() - 0.5) * 0.3 : v.lng,
      })));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#020205] font-mono text-gray-400 overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-gray-900 bg-[#050508] p-6 flex flex-col gap-10 z-20 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
        <div className="space-y-6">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-bold italic">Navigation</p>
          <div onClick={() => router.push('/')} className="cursor-pointer">
            <NavItem icon={<Activity size={18}/>} label="Fleet Monitor" />
          </div>
          <NavItem icon={<Map size={18}/>} label="Live Map" active />
          <div onClick={() => router.push('/analytics')} className="cursor-pointer">
            <NavItem icon={<BarChart3 size={18}/>} label="Analytics" />
          </div>
        </div>

        {/* WEATHER SUMMARY WIDGET */}
        <div className="space-y-4 pt-6 border-t border-gray-900">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-bold italic">Met-Ocean Info</p>
          <div className="bg-purple-500/5 border border-purple-500/20 p-3 rounded-sm space-y-3">
            <div className="flex items-center gap-3">
              <Thermometer size={14} className="text-purple-400" />
              <div>
                <p className="text-[8px] text-gray-500 leading-none uppercase">Avg. Temp</p>
                <p className="text-xs font-black text-white">24.5°C</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wind size={14} className="text-cyan-400" />
              <div>
                <p className="text-[8px] text-gray-500 leading-none uppercase">Sea State</p>
                <p className="text-xs font-black text-white italic tracking-widest">MODERATE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-bold italic">Quick Actions</p>
          <NavItem icon={<PlusSquare size={16}/>} label="Register Vessel" />
          <NavItem icon={<FileText size={16}/>} label="Export Report" />
          <NavItem icon={<Settings size={16}/>} label="Settings" />
        </div>
      </aside>

      {/* MAIN MAP AREA */}
      <main className="flex-1 p-10 relative flex flex-col">
        <div className="mb-6 relative z-10">
          <h1 className="text-2xl font-black tracking-[0.4em] text-white uppercase italic drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]">Live Tracking Map</h1>
          <p className="text-[9px] text-purple-500 tracking-[0.5em] mt-1 uppercase font-bold">
            Simulated Vessel Positions — Satellite Feed Active
          </p>
        </div>

        <div className="flex-1 bg-[#050508]/50 border border-purple-900/20 relative overflow-hidden rounded-sm group shadow-[inset_0_0_100px_rgba(188,19,254,0.05)]">
          
          {/* RADAR SCAN ANIMATION */}
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="w-full h-[2px] bg-purple-500/20 shadow-[0_0_15px_rgba(188,19,254,0.5)] absolute animate-radar-scan"></div>
          </div>

          {/* GRID OVERLAY */}
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#bc13fe 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
          
          {/* VESSEL MARKERS */}
          {vessels.map((v) => (
            <div 
              key={v.id}
              className="absolute transition-all duration-1000 group/marker cursor-crosshair"
              style={{ left: `${v.lng}%`, top: `${v.lat}%` }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <div className={`absolute -inset-4 border rounded-full animate-ping opacity-20 ${
                  v.status === 'en route' ? 'border-green-500' : 'border-cyan-500'
                }`}></div>
                
                <div className={`absolute -inset-2 blur-md opacity-40 rounded-full transition-all duration-500 group-hover/marker:opacity-100 ${
                  v.status === 'en route' ? 'bg-green-500' : 
                  v.status === 'delayed' ? 'bg-orange-500 animate-pulse' : 'bg-cyan-500'
                }`}></div>
                
                <div className={`w-4 h-4 rounded-full border-2 relative z-10 flex items-center justify-center transition-transform group-hover/marker:scale-125 ${
                  v.status === 'en route' ? 'border-green-400' : 
                  v.status === 'delayed' ? 'border-orange-400' : 'border-cyan-400'
                }`}>
                  <Navigation size={10} className="text-white fill-white" />
                </div>

                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#050508] border border-purple-500/50 px-3 py-1 text-[9px] font-black text-white opacity-0 group-hover/marker:opacity-100 transition-all pointer-events-none z-50 tracking-widest uppercase shadow-2xl">
                  {v.name} <span className="text-purple-500 mx-1">|</span> {v.id}
                </div>
              </div>
            </div>
          ))}

          {/* WEATHER OVERLAY MARKERS */}
          {WEATHER_REGIONS.map((w) => (
            <div 
              key={w.id}
              className="absolute transition-all duration-1000 group/weather"
              style={{ left: `${w.lng}%`, top: `${w.lat}%` }}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center">
                  <div className="p-1.5 bg-black/60 border border-cyan-500/30 rounded-full backdrop-blur-md animate-pulse cursor-help">
                    {w.condition === 'Stormy' ? <CloudLightning size={16} className="text-cyan-400"/> : <Sun size={16} className="text-yellow-400"/>}
                  </div>
                  
                  <div className="absolute top-8 bg-[#050508]/95 border border-cyan-500/50 p-3 opacity-0 group-hover/weather:opacity-100 transition-all z-50 min-w-[140px] shadow-[0_0_30px_rgba(0,243,255,0.15)]">
                    <p className="text-[9px] font-black text-cyan-400 uppercase tracking-widest mb-2 border-b border-cyan-900 pb-1">{w.name}</p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[8px]">
                        <span className="text-gray-500 font-bold">TEMPERATURE</span>
                        <span className="text-white font-black">{w.temp}°C</span>
                      </div>
                      <div className="flex justify-between items-center text-[8px]">
                        <span className="text-gray-500 font-bold">WIND VELOCITY</span>
                        <span className="text-white font-black">{w.wind}</span>
                      </div>
                      <div className="flex justify-between items-center text-[8px]">
                        <span className="text-gray-500 font-bold">OUTLOOK</span>
                        <span className="text-cyan-300 font-black uppercase italic">{w.condition}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* MAP LEGEND */}
          <div className="absolute bottom-6 right-6 p-5 bg-black/80 border border-purple-900/30 backdrop-blur-xl shadow-2xl">
            <p className="text-[9px] font-black text-purple-400 uppercase tracking-[0.2em] mb-4 border-b border-purple-900/50 pb-2">Vessel Telemetry</p>
            <div className="space-y-2.5">
              <LegendItem color="bg-green-400" label="Active En Route" />
              <LegendItem color="bg-cyan-400" label="In Port Docking" />
              <LegendItem color="bg-orange-400" label="Delayed / Alert" />
              <LegendItem color="bg-yellow-400" label="Weather Station" />
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes radar-scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-radar-scan {
          animation: radar-scan 6s linear infinite;
        }
      `}</style>
    </div>
  );
}

function LegendItem({ color, label }: { color: string, label: string }) {
  return (
    <div className="flex items-center gap-3 group cursor-default">
      <div className={`w-2 h-2 rounded-full ${color} shadow-[0_0_8px_currentColor] group-hover:scale-125 transition-transform`}></div>
      <span className="text-[8px] font-bold text-gray-400 uppercase tracking-tight group-hover:text-gray-200">{label}</span>
    </div>
  );
}

function NavItem({ icon, label, active = false }: any) {
  return (
    <div className={`flex items-center gap-4 px-3 py-2 cursor-pointer transition-all border-l-2 duration-300 group ${active ? 'bg-purple-500/10 border-[#bc13fe] text-white font-black shadow-[inset_10px_0_20px_rgba(188,19,254,0.1)]' : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}>
      <span className={`${active ? 'text-[#bc13fe]' : 'group-hover:text-purple-400'} transition-colors`}>{icon}</span>
      <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}
