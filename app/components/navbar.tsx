// "use client";
// import React, { useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { Activity, Map, BarChart3, Anchor, ChevronDown, User, LogOut } from 'lucide-react';

// export default function Navbar() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { label: 'Fleet Monitor', icon: <Activity size={18} />, path: '/home' },
//     { label: 'Live Map', icon: <Map size={18} />, path: '/map' },
//     { label: 'Analytics', icon: <BarChart3 size={18} />, path: '/analytics' },
//   ];

//   if (pathname === '/' || pathname === '/login') return null;

//   return (
//     <nav className="bg-[#050508] border-b border-gray-900 w-full z-50 sticky top-0 font-mono">
//       <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
//         {/* Brand/Logo */}
//         <div className="flex items-center gap-4 cursor-pointer" onClick={() => router.push('/home')}>
//           <div className="bg-[#bc13fe] p-2 rounded-sm shadow-[0_0_15px_rgba(188,19,254,0.4)]">
//             <Anchor className="text-white" size={20} />
//           </div>
//           <span className="text-white font-black tracking-[0.3em] uppercase italic text-lg">
//             PRIME<span className="text-[#bc13fe]">LOG</span>
//           </span>
//         </div>

//         {/* Desktop Taskbar Items */}
//         <div className="hidden md:flex items-center gap-2 h-full">
//           {navItems.map((item) => (
//             <button
//               key={item.path}
//               onClick={() => router.push(item.path)}
//               className={`flex items-center gap-3 px-6 h-20 transition-all border-b-2 font-bold text-[10px] uppercase tracking-widest
//                 ${pathname === item.path 
//                   ? 'border-[#bc13fe] text-white bg-purple-500/5 shadow-[inset_0_-10px_20px_rgba(188,19,254,0.05)]' 
//                   : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
//             >
//               <span className={pathname === item.path ? 'text-[#bc13fe]' : ''}>{item.icon}</span>
//               {item.label}
//             </button>
//           ))}
//         </div>

//         {/* Right Section: User & Status */}
//         <div className="flex items-center gap-6">
//           <div className="hidden lg:block text-right border-l border-gray-900 pl-6">
//             <p className="text-[8px] text-gray-600 uppercase font-black tracking-widest">Network Status</p>
//             <p className="text-[10px] text-green-500 font-black uppercase italic">Secure Uplink</p>
//           </div>
//           <button 
//             onClick={() => router.push('/')}
//             className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 hover:bg-red-500/20 transition-all"
//           >
//             <LogOut size={14} className="text-red-500" />
//             <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">Logout</span>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }