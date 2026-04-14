"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, ShieldAlert, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulasi autentikasi
    setTimeout(() => {
      router.push('/home');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#020205] flex items-center justify-center p-6 font-mono relative overflow-hidden">

      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#bc13fe 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="w-full max-w-md bg-[#0a0a0c] border border-gray-800 p-8 relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#bc13fe] to-transparent animate-pulse"></div>
        
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-purple-500/10 rounded-full mb-4 border border-purple-500/30">
            <Lock className="text-[#bc13fe]" size={24} />
          </div>
          <h2 className="text-xl font-black text-white tracking-[0.2em] uppercase">Security Check</h2>
          <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-widest text-wrap">Authorized Personnel Access Only // Kelompok 10</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Operator ID</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
              <input 
                type="text" 
                required
                className="w-full bg-black border border-gray-800 py-3 pl-10 pr-4 text-xs text-white focus:border-[#bc13fe] outline-none transition-all"
                placeholder="NPM_3103"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Access Key</label>
            <div className="relative">
              <ShieldAlert className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
              <input 
                type="password" 
                required
                className="w-full bg-black border border-gray-800 py-3 pl-10 pr-4 text-xs text-white focus:border-[#bc13fe] outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#bc13fe] text-white py-4 font-black text-[10px] tracking-[0.3em] uppercase hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
          >
            {loading ? "Decrypting..." : "Initialise Access"}
            <ArrowRight size={14} />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-900 text-center">
          <p className="text-[8px] text-gray-700 uppercase leading-relaxed">
            By logging in, you agree to maritime data security protocols. 
            Unauthorized access is strictly monitored.
          </p>
        </div>
      </div>
    </div>
  );
}