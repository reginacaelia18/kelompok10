"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { Activity, Map, BarChart3, Settings, PlusSquare, FileText, Anchor, Compass, MousePointer2 } from 'lucide-react';

const INITIAL_VESSELS = [
  { id: 'PL-001', name: 'NUSANTARA PRIMA', lat: 35, lng: 25, status: 'en route' },
  { id: 'PL-002', name: 'SAMUDERA JAYA', lat: 45, lng: 65, status: 'in port' },
  { id: 'PL-003', name: 'GARUDA LAUT', lat: 75, lng: 20, status: 'delayed' },
  { id: 'PL-004', name: 'TANJUNG EMAS', lat: 60, lng: 45, status: 'en route' },
  { id: 'PL-005', name: 'PACIFIC HORIZON', lat: 25, lng: 80, status: 'maintenance' },
  { id: 'PL-006', name: 'RIMBA RAYA', lat: 50, lng: 85, status: 'in port' },
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
      
      <aside className="w-64 border-r border-gray-900 bg-[#050508] p-6 flex flex-col gap-10 z-20 shadow-[20px_0_50px_rgba(0,0,0,0.5)]">
        <div className="space-y-6">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-bold italic">Navigation</p>
          
          <div onClick={() => router.push('/home')}>
            <NavItem icon={<Activity size={18}/>} label="Fleet Monitor" />
          </div>
          
          <NavItem icon={<Map size={18}/>} label="Live Map" active />

          <div onClick={() => router.push('/analytics')}>
            <NavItem icon={<BarChart3 size={18}/>} label="Analytics" />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-bold italic">Fleet Status [cite: 21]</p>
          <div className="grid grid-cols-2 gap-2">
            <StatSmall label="En Route" count={5} color="border-green-500 text-green-400" />
            <StatSmall label="In Port" count={4} color="border-cyan-500 text-cyan-400" />
            <StatSmall label="Delayed" count={2} color="border-orange-500 text-orange-400" />
            <StatSmall label="Maint." count={1} color="border-red-500 text-red-400" />
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-bold italic">Quick Actions</p>
          <NavItem icon={<PlusSquare size={16}/>} label="Register Vessel" />
          <NavItem icon={<FileText size={16}/>} label="Export Report" />
          <NavItem icon={<Settings size={16}/>} label="Settings" />
        </div>
      </aside>

      <main className="flex-1 p-10 relative flex flex-col">

        <div className="mb-6 relative z-10">
          <h1 className="text-2xl font-black tracking-[0.4em] text-white uppercase italic drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]">Live Tracking Map</h1>
          <p className="text-[9px] text-purple-500 tracking-[0.5em] mt-1 uppercase font-bold">
            Simulated Vessel Positions — Satellite Feed Active [cite: 28]
          </p>
        </div>

        <div className="flex-1 bg-[#050508]/50 border border-purple-900/20 relative overflow-hidden rounded-sm group shadow-[inset_0_0_100px_rgba(188,19,254,0.05)]">
          
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="w-full h-[2px] bg-purple-500/20 shadow-[0_0_15px_rgba(188,19,254,0.5)] absolute animate-radar-scan"></div>
          </div>

          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#bc13fe 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/5 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-600/5 blur-[120px] rounded-full"></div>

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
                  <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"></div>
                </div>

                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#050508] border border-purple-500/50 px-3 py-1 text-[9px] font-black text-white opacity-0 group-hover/marker:opacity-100 transition-all pointer-events-none z-50 tracking-widest uppercase shadow-2xl">
                  {v.name} <span className="text-purple-500 mx-1">|</span> {v.id}
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 right-6 p-5 bg-black/80 border border-purple-900/30 backdrop-blur-xl shadow-2xl">
            <p className="text-[9px] font-black text-purple-400 uppercase tracking-[0.2em] mb-4 border-b border-purple-900/50 pb-2">Vessel Telemetry</p>
            <div className="space-y-2.5">
              <LegendItem color="bg-green-400" label="Active En Route" />
              <LegendItem color="bg-cyan-400" label="In Port Docking" />
              <LegendItem color="bg-orange-400" label="Delayed / Alert" />
              <LegendItem color="bg-red-400" label="Under Maintenance" />
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

function StatSmall({ label, count, color }: any) {
  return (
    <div className={`bg-[#08080c] border border-gray-800 p-2 flex flex-col items-center justify-center rounded-sm hover:border-[#bc13fe] transition-all group cursor-default`}>
      <h4 className="text-sm font-black text-white group-hover:scale-110 transition-transform">{count}</h4>
      <p className={`text-[7px] font-bold uppercase tracking-tighter ${color}`}>{label}</p>
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
