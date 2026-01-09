import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
      </main>
      
      <footer className="py-8 text-center border-t border-slate-100 bg-white">
        <p className="text-slate-500 text-sm">
          built by{' '}
          <a 
            href="https://vibecoding.id" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            data-umami-event="click-vibecoding"
          >
            vibecoding.id
          </a>
          {' '}| and{' '}
          <a 
            href="https://s.id/afpchannel" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            data-umami-event="click-afpchannel"
          >
            belajar vibecoding bareng di s.id/afpchannel
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;