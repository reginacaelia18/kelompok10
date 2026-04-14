"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Activity, Filter, Zap, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const INITIAL_SHIP_DATA = [
  { id: 'PK-10-01', name: 'PRIME-OCEAN', type: 'Cargo', status: 'en route', fuel: 74.7, region: 'Asia' },
  { id: 'PK-10-02', name: 'KLS-B-LOGIC', type: 'Tanker', status: 'delayed', fuel: 40.0, region: 'Europe' },
  { id: 'PK-10-03', name: 'SATYA-CARGO', type: 'Container', status: 'maintenance', fuel: 15.0, region: 'Asia' },
  { id: 'PK-10-04', name: 'NEON-FLEET', type: 'Cargo', status: 'in port', fuel: 98.0, region: 'America' },
];

export default function DashboardKelompok10() {
  const [ships, setShips] = useState(INITIAL_SHIP_DATA);
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

  // Komponen khusus untuk merapikan angka desimal di Tooltip Grafik
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#050507] border border-[#bc13fe] p-2 text-xs font-mono shadow-[0_0_10px_rgba(188,19,254,0.2)]">
          <p className="text-white mb-1">{label}</p>
          <p className="text-[#22d3ee]">fuel : {payload[0].value.toFixed(1)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white font-mono p-6">
      
      <nav className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-purple-500/30 pb-4 mb-8 gap-4">
        <div className="flex items-center gap-2 text-purple-500 font-black italic text-xl">
          <Activity className="animate-pulse" /> PRIMELOG_K10
        </div>
        <div className="flex gap-6 text-xs font-bold uppercase">
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
        
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-sm tracking-[0.2em] text-purple-500 font-bold">FLEET_MONITOR_SYSTEM</h2>
            <div className="flex items-center gap-2 bg-gray-900 px-3 py-1 border border-gray-800">
              <Filter size={14} className="text-cyan-400"/>
              <select 
                className="bg-transparent text-[10px] outline-none text-white cursor-pointer"
                onChange={(e) => setFilterRegion(e.target.value)}
                value={filterRegion}
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
              <div key={ship.id} className="bg-gray-900/20 border border-gray-800 p-5 hover:border-purple-500 transition-all relative overflow-hidden group">
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{ship.name}</h3>
                    <p className="text-[10px] text-gray-500">{ship.id} | {ship.type}</p>
                  </div>
                  
                  <div className={`px-2 py-1 text-[9px] font-bold rounded flex items-center gap-1 border ${
                    ship.status === 'en route' ? 'border-green-500 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]' :
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
                    <div className="bg-purple-600 h-full shadow-[0_0_8px_#a855f7] transition-all duration-1000 ease-linear" style={{ width: `${ship.fuel}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/10 border border-gray-800 p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-6 text-cyan-400">
            <BarChart3 size={18}/>
            <h2 className="text-xs font-bold tracking-widest uppercase">Fuel_Consumption_Logs</h2>
          </div>
          
          <div className="h-[250px] w-full flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredShips}>
                <XAxis dataKey="name" stroke="#6b7280" fontSize={9} tickLine={false} interval={0} />
                <Tooltip cursor={{ fill: 'rgba(188, 19, 254, 0.1)' }} content={<CustomTooltip />} />
                <Bar dataKey="fuel" radius={[2, 2, 0, 0]}>
                  {filteredShips.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fuel < 30 ? '#ef4444' : '#bc13fe'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-6 p-4 bg-purple-500/5 border border-purple-500/20 rounded">
            <p className="text-[10px] text-gray-400 leading-relaxed">
              <Zap size={12} className="inline mr-2 text-yellow-400" />
              Sistem mendeteksi <span className="text-white font-bold">
                {ships.filter(s => s.fuel < 30).length} Kapal
              </span> memerlukan pengisian bahan bakar dalam 24 jam ke depan sesuai rute yang direncanakan.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}