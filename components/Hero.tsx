import React from 'react';
import { ArrowRight, ShieldCheck, Database, FileKey, Hash } from 'lucide-react';
import HashDemo from './HashDemo';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-screen flex flex-col items-center">
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-30 h-full w-full bg-white">
        {/* Subtle top-down fade to blend the sun */}
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-blue-50/30 to-transparent"></div>
      </div>
      
      {/* Bluish Gradient "Circle Like" Sun */}
      <div className="absolute top-[-350px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] md:w-[1400px] md:h-[1400px] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0)_100%)] -z-20 pointer-events-none blur-3xl"></div>

      {/* Massive "Logoish" Background Element */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 -z-25 pointer-events-none opacity-[0.04] -rotate-12 mix-blend-multiply">
        <Hash size={1100} strokeWidth={0.8} className="text-blue-900" />
      </div>

      {/* Technical Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.12] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Floating Hash Decoration (Subtle) */}
      <div className="absolute top-20 left-[10%] opacity-40 hidden lg:block animate-pulse-slow">
        <span className="font-mono text-xs text-blue-400 block">0x7f2a...9d</span>
        <span className="font-mono text-xs text-blue-400 block ml-4">0x1b9c...4f</span>
      </div>
      <div className="absolute top-40 right-[15%] opacity-40 hidden lg:block animate-pulse-slow" style={{animationDelay: '2s'}}>
         <span className="font-mono text-xs text-blue-400 block">0x9a21...bb</span>
      </div>

      <div className="container px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-blue-100 text-blue-600 text-xs font-medium mb-8 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v2.0 is now live
        </div>

        {/* Brand Highlight */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-6 select-none tracking-[-0.04em] drop-shadow-sm">
          <span className="text-slate-900">ZUL</span>
          <span className="text-blue-600">HASH</span>
        </h1>

        {/* Primary Subline */}
        <p className="text-xl md:text-2xl font-medium text-slate-700 max-w-2xl mx-auto mb-4">
          Create verifiable hashes for any files, built for Web3.
        </p>

        {/* Secondary Description (Small) */}
        <p className="text-sm text-slate-500 max-w-lg mx-auto mb-10 leading-relaxed">
          The developer-first standard for cryptographic proofs. Generate, verify, and store content-addressable hashes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="h-11 px-8 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2 group">
            Start Hashing
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <button className="h-11 px-8 rounded-md bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm">
            Read Documentation
          </button>
        </div>

        {/* Features Row (Small) */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-slate-500 mb-16 font-medium">
            <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-blue-500"/>
                <span>Cryptographically Secure</span>
            </div>
            <div className="flex items-center gap-2">
                <Database size={18} className="text-blue-500"/>
                <span>Zero-Knowledge Proofs</span>
            </div>
            <div className="flex items-center gap-2">
                <FileKey size={18} className="text-blue-500"/>
                <span>Content Addressing</span>
            </div>
        </div>

        {/* Interactive Demo Component */}
        <HashDemo />

      </div>
    </section>
  );
};

export default Hero;