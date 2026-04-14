"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Activity, Map, BarChart3, Settings, FileText, 
  TrendingUp, Fuel, Ship, AlertCircle, Clock, Globe 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';

const VOYAGE_DATA = [
  { month: 'Jan', completed: 35 }, { month: 'Feb', completed: 42 },
  { month: 'Mar', completed: 47 }, { month: 'Apr', completed: 52 }
];

const FUEL_DATA = [
  { day: '01', usage: 120 }, { day: '05', usage: 150 }, { day: '10', usage: 110 },
  { day: '15', usage: 180 }, { day: '20', usage: 140 }, { day: '25', usage: 160 },
  { day: '30', usage: 155 }
];

const AVAILABILITY_DATA = [
  { name: 'Active', value: 75, color: '#bc13fe' },
  { name: 'Available', value: 17, color: '#22d3ee' },
  { name: 'In Service', value: 8, color: '#ef4444' }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#050508] border border-[#bc13fe] p-2 text-[10px] font-mono shadow-[0_0_10px_rgba(188,19,254,0.3)]">
        <p className="text-white mb-1 uppercase tracking-widest">{label}</p>
        <p className="text-[#bc13fe] font-bold">
          {payload[0].name} : {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

function AnalyticWidget({ label, value, icon, trend }: any) {
  return (
    <div className="bg-[#08080c] border border-gray-900 p-5 rounded-sm hover:border-purple-500/50 transition-all">
      <div className="flex justify-between items-center mb-3">
        <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">{label}</span>
        {icon}
      </div>
      <h2 className="text-xl font-black text-white">{value}</h2>
      <p className={`text-[8px] font-bold mt-2 ${trend.includes('+') ? 'text-green-400' : 'text-gray-500'}`}>
        {trend} VS PREVIOUS
      </p>
    </div>
  );
}

function ActivityRow({ time, vessel, event, status }: any) {
  return (
    <div className="flex justify-between items-center border-b border-gray-900 pb-3 hover:bg-white/5 transition-colors px-2">
      <span className="text-gray-500">{time}</span>
      <span className="font-bold text-white uppercase">{vessel}</span>
      <span className="text-gray-400 italic">{event}</span>
      <span className="text-cyan-400 font-bold uppercase">{status}</span>
    </div>
  );
}

function NavItem({ icon, label, active = false, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-4 px-3 py-2 cursor-pointer transition-all border-l-2 duration-300 ${
        active 
          ? 'bg-purple-500/10 border-[#bc13fe] text-white font-black' 
          : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'
      }`}
    >
      {icon}
      <span className="text-[10px] uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}

export default function AnalyticsPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-[#020205] font-mono text-gray-400 overflow-hidden">
      
      <aside className="w-64 border-r border-gray-900 bg-[#050508] p-6 flex flex-col gap-10 z-20">
        <div className="space-y-6">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-bold italic">Navigation</p>
          <NavItem 
            icon={<Activity size={18}/>} 
            label="Fleet Monitor" 
            onClick={() => router.push('/home')} 
          />
          <NavItem 
            icon={<Map size={18}/>} 
            label="Live Map" 
            onClick={() => router.push('/map')} 
          />
          <NavItem 
            icon={<BarChart3 size={18}/>} 
            label="Analytics" 
            active 
          />
        </div>

        <div className="mt-auto space-y-4">
          <p className="text-[10px] text-gray-600 tracking-[0.3em] uppercase font-bold italic">Actions</p>
          <NavItem icon={<FileText size={16}/>} label="Export Report" />
          <NavItem icon={<Settings size={16}/>} label="System Config" />
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto relative custom-scrollbar">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#bc13fe]/5 blur-[120px] pointer-events-none"></div>

        <header className="mb-10">
          <h1 className="text-2xl font-black tracking-[0.4em] text-white uppercase italic">Fleet Analytics</h1>
          <p className="text-[9px] text-[#bc13fe] tracking-[0.5em] mt-1 uppercase font-bold">Performance Metrics — Last 30 Days</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <AnalyticWidget label="On-Time Delivery" value="87.3%" icon={<Clock className="text-green-400"/>} trend="+2.4%" />
          <AnalyticWidget label="Avg. Speed" value="14.7 kn" icon={<TrendingUp className="text-cyan-400"/>} trend="-0.5%" />
          <AnalyticWidget label="Total Distance" value="42.8K NM" icon={<Globe className="text-purple-500"/>} trend="+12%" />
          <AnalyticWidget label="Incident Rate" value="0.02" icon={<AlertCircle className="text-red-500"/>} trend="Stable" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#08080c] border border-gray-900 p-6 rounded-sm">
            <h3 className="text-[10px] font-bold tracking-widest text-white mb-6 uppercase flex items-center gap-2">
              <Ship size={14} className="text-[#bc13fe]"/> Voyages Completed
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={VOYAGE_DATA}>
                  <XAxis 
                    dataKey="month" 
                    stroke="#4b5563" 
                    fontSize={10} 
                    axisLine={false} 
                    tickLine={false} 
                  />
                  <YAxis hide />
                  <Tooltip 
                    cursor={{ fill: 'rgba(188, 19, 254, 0.1)' }} 
                    content={<CustomTooltip />} 
                  />
                  <Bar 
                    dataKey="completed" 
                    fill="rgba(188, 19, 254, 0.6)" 
                    stroke="#bc13fe" 
                    strokeWidth={1}
                    radius={[4, 4, 0, 0]} 
                    className="cursor-pointer transition-all duration-300 hover:fill-[rgba(188, 19, 254, 0.9)]"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-[#08080c] border border-gray-900 p-6 rounded-sm">
            <h3 className="text-[10px] font-bold tracking-widest text-white mb-6 uppercase flex items-center gap-2">
              <Fuel size={14} className="text-cyan-400"/> Fuel Consumption (TON)
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={FUEL_DATA}>
                  <defs>
                    <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" stroke="#4b5563" fontSize={10} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{backgroundColor: '#050508', border: '1px solid #22d3ee'}} />
                  <Area type="monotone" dataKey="usage" stroke="#22d3ee" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-[#08080c] border border-gray-900 p-6 flex flex-col items-center">
            <h3 className="text-[10px] font-bold tracking-widest text-white mb-8 self-start uppercase">Fleet Availability</h3>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={AVAILABILITY_DATA} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {AVAILABILITY_DATA.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-4 mt-4">
              {AVAILABILITY_DATA.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}}></div>
                  <span className="text-[8px] font-bold uppercase">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-[#08080c] border border-gray-900 p-6">
            <h3 className="text-[10px] font-bold tracking-widest text-white mb-6 uppercase">Recent Activity Log</h3>
            <div className="space-y-4 text-[9px]">
              <ActivityRow time="12:34:02" vessel="PL-007" event="Departed Singapore" status="En Route" />
              <ActivityRow time="11:20:15" vessel="PL-002" event="Docked at Makassar" status="In Port" />
              <ActivityRow time="10:55:41" vessel="PL-003" event="Engine Maintenance Alert" status="Alert" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}