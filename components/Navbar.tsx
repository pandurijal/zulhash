import React from 'react';
import { Hash } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-blue-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded-md shadow-sm shadow-blue-200">
              <Hash size={20} strokeWidth={2.5} />
            </div>
            <div className="font-bold text-lg tracking-tight flex">
              <span className="text-slate-900">zul</span>
              <span className="text-blue-600">hash</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#developers" className="hover:text-blue-600 transition-colors">Developers</a>
            <a href="#security" className="hover:text-blue-600 transition-colors">Security</a>
          </div>

          {/* Empty div to balance flex layout if needed, or just remove if not strictly required for alignment. 
              Since flex uses space-between, removing the third element pushes links to the right. 
              To keep links centered or right aligned as before, we can leave it empty or adjust parent.
              For now, simple removal is cleanest. */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;