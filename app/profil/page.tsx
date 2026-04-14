import React from 'react';

const FleetDashboard = () => {
  const ships = [
    { name: 'PRIME-OCEAN', id: 'PK-10-01', type: 'Cargo', status: 'EN ROUTE', statusColor: 'text-green-400 border-green-800 bg-green-900/20', indicator: 'bg-green-400', fuel: 74.7 },
    { name: 'KLS-B-LOGIC', id: 'PK-10-02', type: 'Tanker', status: 'DELAYED', statusColor: 'text-red-500 border-red-900 bg-red-900/20', indicator: 'bg-red-500', fuel: 40.0 },
    { name: 'SATYA-CARGO', id: 'PK-10-03', type: 'Container', status: 'MAINTENANCE', statusColor: 'text-gray-400 border-gray-600 bg-gray-800/50', indicator: 'bg-gray-400', fuel: 15.0 },
    { name: 'NEON-FLEET', id: 'PK-10-04', type: 'Cargo', status: 'IN PORT', statusColor: 'text-gray-400 border-gray-600 bg-gray-800/50', indicator: 'bg-gray-400', fuel: 98.0 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-300 font-mono p-4 md:p-8">
      {/* Navbar */}
      <nav className="flex justify-between items-center border-b border-gray-800 pb-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-purple-500 text-2xl">∿</span>
          <h1 className="text-purple-500 font-bold tracking-widest text-lg drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
            PRIMELOG_K10
          </h1>
        </div>
        <div className="flex gap-6 text-xs text-gray-500 tracking-wider">
          <button className="text-gray-300 hover:text-white flex items-center gap-1">FLEET <span className="text-[10px]">▼</span></button>
          <button className="hover:text-gray-300">MAP (SOON)</button>
          <button className="hover:text-gray-300">ANALYTICS</button>
        </div>
      </nav>

      {/* Header Actions */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-purple-500 text-sm tracking-[0.2em] font-semibold drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">
          FLEET_MONITOR_SYSTEM
        </h2>
        <button className="border border-cyan-800 bg-cyan-950/30 text-cyan-400 px-4 py-1.5 text-xs flex items-center gap-2 hover:bg-cyan-900/50 transition-colors">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
          ALL_REGIONS <span className="text-[10px] ml-1">▼</span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Ship Cards */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {ships.map((ship, idx) => (
            <div key={idx} className="border border-gray-800 bg-[#0d0d12] p-5 relative overflow-hidden group hover:border-purple-900/50 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-white font-bold tracking-wide">{ship.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{ship.id} | {ship.type}</p>
                </div>
                <div className={`border px-3 py-1 text-[10px] tracking-wider flex items-center gap-2 ${ship.statusColor}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${ship.indicator}`}></div>
                  {ship.status}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-500 tracking-widest">FUEL_LEVEL</span>
                  <span className="text-cyan-400 font-bold">{ship.fuel.toFixed(1)}%</span>
                </div>
                {/* Neon Progress Bar */}
                <div className="w-full bg-gray-900 h-1">
                  <div 
                    className="bg-purple-600 h-1 shadow-[0_0_10px_#a855f7]"
                    style={{ width: `${ship.fuel}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Analytics & Alerts */}
        <div className="col-span-1 border border-gray-800 bg-[#0d0d12] p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-cyan-400 text-xs tracking-widest flex items-center gap-2 mb-8">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              FUEL_CONSUMPTION_LOGS
            </h3>
            
            {/* Simple CSS Chart */}
            <div className="h-48 flex items-end justify-between gap-2 border-b border-gray-800 pb-2">
              <div className="w-full bg-[#bf00ff] h-[70%] hover:brightness-125 transition-all"></div>
              <div className="w-full bg-[#a800ff] h-[45%] hover:brightness-125 transition-all"></div>
              <div className="w-full bg-[#ff4d4d] h-[20%] hover:brightness-125 transition-all"></div>
              <div className="w-full bg-[#b829ff] h-[95%] hover:brightness-125 transition-all"></div>
            </div>
            <div className="flex justify-between mt-2 text-[9px] text-gray-500 text-center">
              <span className="w-full truncate px-1">PRIME-OCEAN</span>
              <span className="w-full truncate px-1">KLS-B-LOGIC</span>
              <span className="w-full truncate px-1">SATYA-CARGO</span>
              <span className="w-full truncate px-1">NEON-FLEET</span>
            </div>
          </div>

          {/* Alert Box */}
          <div className="mt-8 border border-purple-900/50 bg-[#1a0b2e]/30 p-4 flex gap-3 items-start">
            <span className="text-yellow-500">⚡</span>
            <p className="text-xs text-gray-400 leading-relaxed">
              Sistem mendeteksi <strong className="text-gray-200">2 Kapal</strong> memerlukan pengisian bahan bakar dalam 24 jam ke depan sesuai rute yang direncanakan.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FleetDashboard;