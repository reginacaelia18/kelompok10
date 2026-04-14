"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { Activity, Map, BarChart3, Settings, PlusSquare, FileText, Anchor, X, Maximize2 } from 'lucide-react';

const VESSELS = [
  { id: 'PL-001', name: 'NUSANTARA PRIMA', type: 'Container', status: 'en route', origin: 'Jakarta', dest: 'Singapore', speed: '14.8 kn', crew: 28, progress: 87, lat: -6.1, lng: 106.8 },
  { id: 'PL-002', name: 'SAMUDERA JAYA', type: 'Bulk Carrier', status: 'in port', origin: 'Surabaya', dest: 'Makassar', speed: '0 kn', crew: 22, progress: 100, lat: -7.2, lng: 112.7 },
  { id: 'PL-003', name: 'GARUDA LAUT', type: 'Tanker', status: 'delayed', origin: 'Batam', dest: 'Balikpapan', speed: '8.1 kn', crew: 35, progress: 31, lat: 1.1, lng: 104.0 },
  { id: 'PL-004', name: 'TANJUNG EMAS', type: 'RoRo', status: 'en route', origin: 'Semarang', dest: 'Kuala Lumpur', speed: '16.0 kn', crew: 18, progress: 100, lat: -6.9, lng: 110.4 },
];

export default function FleetMonitor() {
  const router = useRouter(); // Inisialisasi router
  const [ships, setShips] = useState(VESSELS);
  const [showMap, setShowMap] = useState(false);
  const [selectedShip, setSelectedShip] = useState<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShips(prev => prev.map(s => ({
        ...s,
        progress: s.status === 'en route' ? Math.min(100, s.progress + 0.1) : s.progress
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-[#020204] font-mono text-gray-300 overflow-hidden">
      <aside className="w-64 border-r border-purple-500/20 p-6 flex flex-col gap-8 bg-[#050507] z-20">
        <div className="space-y-4">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-black">Navigation</p>
          <NavItem icon={<Activity size={18}/>} label="Fleet Monitor" active />
          
          <div onClick={() => router.push('/map')} className="cursor-pointer">
            <NavItem icon={<Map size={18}/>} label="Live Map" />
          </div>
          
          <NavItem icon={<BarChart3 size={18}/>} label="Analytics" />
        </div>

        <div className="space-y-4">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-black">Quick Actions</p>
          <NavItem icon={<PlusSquare size={18}/>} label="Register Vessel" />
          <NavItem icon={<FileText size={18}/>} label="Export Report" />
          <NavItem icon={<Settings size={18}/>} label="Settings" />
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bc13fe] opacity-[0.03] blur-[120px] pointer-events-none"></div>

        <header className="flex justify-between items-center mb-10 border-b border-gray-900 pb-6">
          <div>
            <h1 className="text-2xl font-black tracking-[0.3em] text-white uppercase italic">
              <span className="text-[#bc13fe]">PRIME</span>LOG_MONITOR
            </h1>
            <p className="text-[10px] text-purple-400 mt-1 uppercase tracking-[0.4em]">Satellite Feed Active — Southeast Asia Corridor [cite: 54]</p>
          </div>
        </header>

        <section className="grid grid-cols-4 gap-4 mb-8">
          <StatBox label="En Route" count={5} color="border-green-500" />
          <StatBox label="In Port" count={4} color="border-cyan-500" />
          <StatBox label="Delayed" count={2} color="border-orange-500" />
          <StatBox label="Maintenance" count={1} color="border-red-500" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ships.map((ship) => (
            <VesselCard 
              key={ship.id} 
              ship={ship} 
              onOpenMap={() => router.push('/map')} 
            />
          ))}
        </section>
      </main>
    </div>
  );
}

function VesselCard({ ship, onOpenMap }: any) {
  const statusColors: any = {
    'en route': 'text-green-400 border-green-500 bg-green-500/10 shadow-[0_0_10px_rgba(34,197,94,0.2)]',
    'in port': 'text-cyan-400 border-cyan-500 bg-cyan-500/10',
    'delayed': 'text-orange-400 border-orange-500 bg-orange-500/10 animate-pulse',
    'maintenance': 'text-red-400 border-red-500 bg-red-500/10'
  };

  return (
    <div className="bg-[#0a0a0f] border border-gray-800 p-6 relative overflow-hidden group hover:border-[#bc13fe]/50 transition-all duration-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
      <div className="absolute top-0 left-[-100%] w-full h-[1px] bg-gradient-to-r from-transparent via-[#bc13fe] to-transparent group-hover:left-[100%] transition-all duration-1000"></div>
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest">{ship.id} // {ship.type}</p>
          <h3 className="text-white font-black tracking-wider mt-1 group-hover:text-[#bc13fe] transition-colors duration-300 text-sm italic">{ship.name}</h3>
        </div>
        <button onClick={onOpenMap} className="p-2 border border-gray-800 text-gray-500 hover:border-cyan-500 hover:text-cyan-400 transition-all rounded-sm bg-[#050507]">
          <Maximize2 size={14} />
        </button>
      </div>

      <div className={`mb-6 inline-block px-3 py-1 text-[8px] font-black uppercase border rounded-sm tracking-[0.2em] ${statusColors[ship.status]}`}>
        {ship.status}
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-[9px] mb-8 border-l border-gray-800 pl-4 font-bold tracking-tight text-gray-400">
        <div><p className="text-gray-600 uppercase mb-1">Origin</p><p className="uppercase italic">{ship.origin}</p></div>
        <div><p className="text-gray-600 uppercase mb-1">Destination</p><p className="uppercase italic">{ship.dest}</p></div>
        <div><p className="text-gray-600 uppercase mb-1">Speed</p><p className="text-cyan-400 font-black">{ship.speed}</p></div>
        <div><p className="text-gray-600 uppercase mb-1">Crew</p><p className="italic">{ship.crew} persons</p></div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-[8px] text-gray-500 uppercase tracking-[0.3em] font-black">
          <span>Route_Progress</span>
          <span className="text-[#bc13fe]">{ship.progress.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-900 h-1 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-purple-800 to-[#bc13fe] h-full shadow-[0_0_10px_#bc13fe] transition-all duration-1000 ease-linear" 
            style={{ width: `${ship.progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, count, color }: any) {
  return (
    <div className={`bg-[#0a0a0f] border-l-4 ${color} p-5 flex justify-between items-center group hover:bg-[#0c0c12] transition-all duration-500 cursor-pointer shadow-lg`}>
      <div>
        <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">{label}</p>
        <h2 className="text-3xl font-black text-white mt-1 group-hover:scale-110 transition-transform duration-500">{count}</h2>
      </div>
      <Anchor size={28} className="text-gray-800 opacity-20 group-hover:opacity-60 group-hover:text-cyan-500 transition-all duration-500" />
    </div>
  );
}

function NavItem({ icon, label, active = false }: any) {
  return (
    <div className={`flex items-center gap-4 px-4 py-3 cursor-pointer transition-all border-l-2 duration-300 ${active ? 'bg-purple-500/5 border-[#bc13fe] text-white font-black' : 'border-transparent text-gray-600 hover:text-gray-300 hover:bg-white/5'}`}>
      {icon}
      <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}