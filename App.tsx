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
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} zulhash Inc. All hashing performed locally.
        </p>
      </footer>
    </div>
  );
}

export default App;