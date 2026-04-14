<<<<<<< HEAD
"use client";
import { useState, useEffect } from 'react';
import { SHIP_DATA } from '../data/vessels';
import { Ship, Map, BarChart3, ChevronDown, Activity, Filter, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
=======
// "use client";
>>>>>>> b2f1a0bbe8a928e5d2f8b6db7802582587721bc7

<<<<<<< HEAD
export default function DashboardKelompok10() {
  const [ships, setShips] = useState(SHIP_DATA);
  const [filterRegion, setFilterRegion] = useState('All');

  useEffect(() => {
    const interval = setInterval(() => {
      setShips(prev => prev.map(s => ({
        ...s,
        fuel: s.status === 'en route' ? Math.max(0, s.fuel - 0.05) : s.fuel,
      })));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredShips = filterRegion === 'All' 
    ? ships 
    : ships.filter(s => s.region === filterRegion);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-mono p-6">
      {}
      <nav className="flex justify-between items-center border-b border-purple-500/30 pb-4 mb-8">
        <div className="flex items-center gap-2 text-purple-500 font-black italic text-xl">
          <Activity className="animate-pulse" /> PRIMELOG_K10
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase">
          <div className="relative group cursor-pointer py-2">
            <span className="hover:text-cyan-400 flex items-center gap-1">Fleet <ChevronDown size={14}/></span>
            <div className="absolute hidden group-hover:block bg-black border border-purple-500 p-4 w-48 z-50 mt-1 shadow-[0_0_15px_#bc13fe]">
              <p className="p-2 hover:bg-purple-500/20">› Live Tracking</p>
              <p className="p-2 hover:bg-purple-500/20">› Vessel Logs</p>
            </div>
          </div>
          <span className="hover:text-cyan-400 cursor-pointer py-2 text-gray-500">Map (Soon)</span>
          <span className="hover:text-cyan-400 cursor-pointer py-2 text-gray-500">Analytics</span>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm tracking-[0.2em] text-purple-500 font-bold">FLEET_MONITOR_SYSTEM</h2>
            {}
            <div className="flex items-center gap-2 bg-gray-900 px-3 py-1 border border-gray-800">
              <Filter size={14} className="text-cyan-400"/>
              <select 
                className="bg-transparent text-[10px] outline-none"
                onChange={(e) => setFilterRegion(e.target.value)}
              >
                <option value="All">ALL_REGIONS</option>
                <option value="Asia">ASIA</option>
                <option value="Europe">EUROPE</option>
                <option value="America">AMERICA</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredShips.map((ship) => (
              <div key={ship.id} className="bg-gray-900/20 border border-gray-800 p-5 hover:border-purple-500 transition-all relative overflow-hidden">
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{ship.name}</h3>
                    <p className="text-[10px] text-gray-500">{ship.id} | {ship.type}</p>
                  </div>
                  {}
                  <div className={`px-2 py-1 text-[9px] font-bold rounded flex items-center gap-1 border ${
                    ship.status === 'en route' ? 'border-green-500 text-green-400 shadow-[0_0_10px_#22c55e]' :
                    ship.status === 'delayed' ? 'border-red-500 text-red-400 animate-pulse' : 'border-gray-500 text-gray-400'
                  }`}>
                    {ship.status === 'en route' && <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-ping"/>}
                    {ship.status.toUpperCase()}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-500 font-bold">FUEL_LEVEL</span>
                    <span className="text-cyan-400 font-bold">{ship.fuel.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-1">
                    <div className="bg-purple-600 h-full shadow-[0_0_8px_#a855f7]" style={{ width: `${ship.fuel}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className="bg-gray-900/10 border border-gray-800 p-6">
          <div className="flex items-center gap-2 mb-6 text-cyan-400">
            <BarChart3 size={18}/>
            <h2 className="text-xs font-bold tracking-widest uppercase">Fuel_Consumption_Logs</h2>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ships}>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={10} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #bc13fe', fontSize: '10px' }}
                  itemStyle={{ color: '#00f3ff' }}
                />
                <Bar dataKey="fuel" radius={[2, 2, 0, 0]}>
                  {ships.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fuel < 30 ? '#ef4444' : '#bc13fe'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 p-4 bg-purple-500/5 border border-purple-500/20 rounded">
            <p className="text-[10px] text-gray-400 leading-relaxed">
              <Zap size={12} className="inline mr-2 text-yellow-400" />
              Sistem mendeteksi <span className="text-white font-bold">2 Kapal</span> memerlukan pengisian bahan bakar dalam 24 jam ke depan sesuai rute yang direncanakan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
// import React, { useState, useEffect } from 'react';
// import { ChevronDown, Activity, Filter, Zap, BarChart3 } from 'lucide-react';
// import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// const INITIAL_SHIP_DATA = [
//   { id: 'PK-10-01', name: 'PRIME-OCEAN', type: 'Cargo', status: 'en route', fuel: 74.7, region: 'Asia' },
//   { id: 'PK-10-02', name: 'KLS-B-LOGIC', type: 'Tanker', status: 'delayed', fuel: 40.0, region: 'Europe' },
//   { id: 'PK-10-03', name: 'SATYA-CARGO', type: 'Container', status: 'maintenance', fuel: 15.0, region: 'Asia' },
//   { id: 'PK-10-04', name: 'NEON-FLEET', type: 'Cargo', status: 'in port', fuel: 98.0, region: 'America' },
// ];

// export default function DashboardKelompok10() {
//   const [ships, setShips] = useState(INITIAL_SHIP_DATA);
//   const [filterRegion, setFilterRegion] = useState('All');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShips(prev => prev.map(s => ({
//         ...s,
//         fuel: s.status === 'en route' ? Math.max(0, s.fuel - 0.05) : s.fuel,
//       })));
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const filteredShips = filterRegion === 'All' 
//     ? ships 
//     : ships.filter(s => s.region === filterRegion);

//   // Komponen khusus untuk merapikan angka desimal di Tooltip Grafik
//   const CustomTooltip = ({ active, payload, label }: any) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-[#050507] border border-[#bc13fe] p-2 text-xs font-mono shadow-[0_0_10px_rgba(188,19,254,0.2)]">
//           <p className="text-white mb-1">{label}</p>
//           <p className="text-[#22d3ee]">fuel : {payload[0].value.toFixed(1)}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="min-h-screen bg-[#050507] text-white font-mono p-6">
      
//       <nav className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-purple-500/30 pb-4 mb-8 gap-4">
//         <div className="flex items-center gap-2 text-purple-500 font-black italic text-xl">
//           <Activity className="animate-pulse" /> PRIMELOG_K10
//         </div>
//         <div className="flex gap-6 text-xs font-bold uppercase">
//           <div className="relative group cursor-pointer py-2">
//             <span className="hover:text-cyan-400 flex items-center gap-1">Fleet <ChevronDown size={14}/></span>
//             <div className="absolute hidden group-hover:block bg-black border border-purple-500 p-4 w-48 z-50 mt-1 shadow-[0_0_15px_#bc13fe]">
//               <p className="p-2 hover:bg-purple-500/20">› Live Tracking</p>
//               <p className="p-2 hover:bg-purple-500/20">› Vessel Logs</p>
//             </div>
//           </div>
//           <span className="hover:text-cyan-400 cursor-pointer py-2 text-gray-500">Map (Soon)</span>
//           <span className="hover:text-cyan-400 cursor-pointer py-2 text-gray-500">Analytics</span>
//         </div>
//       </nav>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
//         <div className="lg:col-span-2">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-sm tracking-[0.2em] text-purple-500 font-bold">FLEET_MONITOR_SYSTEM</h2>
//             <div className="flex items-center gap-2 bg-gray-900 px-3 py-1 border border-gray-800">
//               <Filter size={14} className="text-cyan-400"/>
//               <select 
//                 className="bg-transparent text-[10px] outline-none text-white cursor-pointer"
//                 onChange={(e) => setFilterRegion(e.target.value)}
//                 value={filterRegion}
//               >
//                 <option value="All">ALL_REGIONS</option>
//                 <option value="Asia">ASIA</option>
//                 <option value="Europe">EUROPE</option>
//                 <option value="America">AMERICA</option>
//               </select>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {filteredShips.map((ship) => (
//               <div key={ship.id} className="bg-gray-900/20 border border-gray-800 p-5 hover:border-purple-500 transition-all relative overflow-hidden group">
//                 <div className="flex justify-between mb-4">
//                   <div>
//                     <h3 className="font-bold text-lg">{ship.name}</h3>
//                     <p className="text-[10px] text-gray-500">{ship.id} | {ship.type}</p>
//                   </div>
                  
//                   <div className={`px-2 py-1 text-[9px] font-bold rounded flex items-center gap-1 border ${
//                     ship.status === 'en route' ? 'border-green-500 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]' :
//                     ship.status === 'delayed' ? 'border-red-500 text-red-400 animate-pulse' : 'border-gray-500 text-gray-400'
//                   }`}>
//                     {ship.status === 'en route' && <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-ping"/>}
//                     {ship.status.toUpperCase()}
//                   </div>
//                 </div>
                
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-[10px]">
//                     <span className="text-gray-500 font-bold">FUEL_LEVEL</span>
//                     <span className="text-cyan-400 font-bold">{ship.fuel.toFixed(1)}%</span>
//                   </div>
//                   <div className="w-full bg-gray-800 h-1">
//                     <div className="bg-purple-600 h-full shadow-[0_0_8px_#a855f7] transition-all duration-1000 ease-linear" style={{ width: `${ship.fuel}%` }} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-gray-900/10 border border-gray-800 p-6 flex flex-col">
//           <div className="flex items-center gap-2 mb-6 text-cyan-400">
//             <BarChart3 size={18}/>
//             <h2 className="text-xs font-bold tracking-widest uppercase">Fuel_Consumption_Logs</h2>
//           </div>
          
//           <div className="h-[250px] w-full flex-grow">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={filteredShips}>
//                 <XAxis dataKey="name" stroke="#6b7280" fontSize={9} tickLine={false} interval={0} />
//                 <Tooltip cursor={{ fill: 'rgba(188, 19, 254, 0.1)' }} content={<CustomTooltip />} />
//                 <Bar dataKey="fuel" radius={[2, 2, 0, 0]}>
//                   {filteredShips.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.fuel < 30 ? '#ef4444' : '#bc13fe'} />
//                   ))}
//                 </Bar>
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="mt-6 p-4 bg-purple-500/5 border border-purple-500/20 rounded">
//             <p className="text-[10px] text-gray-400 leading-relaxed">
//               <Zap size={12} className="inline mr-2 text-yellow-400" />
//               Sistem mendeteksi <span className="text-white font-bold">
//                 {ships.filter(s => s.fuel < 30).length} Kapal
//               </span> memerlukan pengisian bahan bakar dalam 24 jam ke depan sesuai rute yang direncanakan.
//             </p>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { 
  Activity, 
  Map, 
  BarChart3, 
  Settings, 
  PlusSquare, 
  FileText, 
  Anchor, 
  X, 
  Maximize2 
} from 'lucide-react';

const VESSELS = [
  { id: 'PL-001', name: 'NUSANTARA PRIMA', type: 'Container', status: 'en route', origin: 'Jakarta', dest: 'Singapore', speed: '14.8 kn', crew: 28, progress: 87, lat: -6.1, lng: 106.8 },
  { id: 'PL-002', name: 'SAMUDERA JAYA', type: 'Bulk Carrier', status: 'in port', origin: 'Surabaya', dest: 'Makassar', speed: '0 kn', crew: 22, progress: 100, lat: -7.2, lng: 112.7 },
  { id: 'PL-003', name: 'GARUDA LAUT', type: 'Tanker', status: 'delayed', origin: 'Batam', dest: 'Balikpapan', speed: '8.1 kn', crew: 35, progress: 31, lat: 1.1, lng: 104.0 },
  { id: 'PL-004', name: 'TANJUNG EMAS', type: 'RoRo', status: 'en route', origin: 'Semarang', dest: 'Kuala Lumpur', speed: '16.0 kn', crew: 18, progress: 100, lat: -6.9, lng: 110.4 },
];

export default function FleetMonitor() {
  const router = useRouter(); // Inisialisasi router
  const [ships, setShips] = useState(VESSELS);

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
          
          <div onClick={() => router.push('/home')} className="cursor-pointer">
            <NavItem icon={<Activity size={18}/>} label="Fleet Monitor" active />
          </div>
          
          <div onClick={() => router.push('/map')} className="cursor-pointer">
            <NavItem icon={<Map size={18}/>} label="Live Map" />
          </div>
          
          <div onClick={() => router.push('/analytics')} className="cursor-pointer">
            <NavItem icon={<BarChart3 size={18}/>} label="Analytics" />
          </div>
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
>>>>>>> b2f1a0bbe8a928e5d2f8b6db7802582587721bc7