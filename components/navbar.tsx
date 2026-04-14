"use client";
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Activity, Map, BarChart3, Anchor, Settings, LogOut } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  // Jangan tampilkan Taskbar di halaman Login
  if (pathname === '/login') return null;

  return (
    <nav className="w-full h-20 bg-[#0a0a0c] border-b border-purple-500/20 px-8 flex items-center justify-between sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      
      {/* Kiri: Logo & Brand */}
      <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push('/home')}>
        <div className="bg-[#bc13fe] p-2 rounded-sm shadow-[0_0_15px_rgba(188,19,254,0.4)] text-white">
          <Anchor size={20} />
        </div>
        <span className="text-white font-black tracking-[0.3em] uppercase italic text-lg hidden md:block">
          PRIME<span className="text-[#bc13fe]">LOG</span>
        </span>
      </div>

      {/* Tengah: Menu Navigasi (Horizontal) */}
      <div className="flex items-center h-full gap-2">
        <NavButton 
          label="Monitor" 
          icon={<Activity size={18}/>} 
          active={pathname === '/home'} 
          onClick={() => router.push('/home')} 
        />
        <NavButton 
          label="Live Map" 
          icon={<Map size={18}/>} 
          active={pathname === '/map'} 
          onClick={() => router.push('/map')} 
        />
        <NavButton 
          label="Analytics" 
          icon={<BarChart3 size={18}/>} 
          active={pathname === '/analytics'} 
          onClick={() => router.push('/analytics')} 
        />
      </div>

      {/* Kanan: Logout / Settings */}
      <button 
        onClick={() => router.push('/')}
        className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 hover:bg-red-500/20 transition-all rounded-sm"
      >
        <LogOut size={14} className="text-red-500" />
        <span className="text-[9px] font-black text-red-500 uppercase tracking-widest hidden sm:block">Logout</span>
      </button>
    </nav>
  );
}

function NavButton({ icon, label, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 h-20 transition-all border-b-2 font-black text-[10px] uppercase tracking-widest
        ${active 
          ? 'border-[#bc13fe] text-white bg-purple-500/5 shadow-[inset_0_-10px_20px_rgba(188,19,254,0.05)]' 
          : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
    >
      <span className={active ? 'text-[#bc13fe]' : ''}>{icon}</span>
      <span className="hidden lg:block">{label}</span>
    </button>
  );
}