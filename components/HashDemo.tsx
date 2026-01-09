import React, { useState, useEffect, useCallback } from 'react';
import { FileUp, Copy, Check, RefreshCw, FileText } from 'lucide-react';
import { sha256Text, sha256File } from '../utils/crypto';

const HashDemo: React.FC = () => {
  const [inputMode, setInputMode] = useState<'text' | 'file'>('text');
  const [textInput, setTextInput] = useState('Immutable truth for the decentralized web.');
  const [fileInput, setFileInput] = useState<File | null>(null);
  const [hash, setHash] = useState('');
  const [isComputing, setIsComputing] = useState(false);
  const [copied, setCopied] = useState(false);

  const calculateHash = useCallback(async () => {
    setIsComputing(true);
    try {
      if (inputMode === 'text') {
        const h = await sha256Text(textInput);
        setHash(h);
      } else if (inputMode === 'file' && fileInput) {
        const h = await sha256File(fileInput);
        setHash(h);
      } else {
        setHash('');
      }
    } catch (error) {
      console.error("Hashing failed", error);
    } finally {
      // Small artificial delay to show "process" for UX, keeps it feeling technical
      setTimeout(() => setIsComputing(false), 300);
    }
  }, [inputMode, textInput, fileInput]);

  useEffect(() => {
    calculateHash();
  }, [calculateHash]);

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileInput(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-16 bg-white rounded-xl shadow-xl shadow-blue-100/50 border border-slate-200 overflow-hidden">
      {/* Header / Tabs */}
      <div className="flex border-b border-slate-100 bg-slate-50/30">
        <button
          onClick={() => setInputMode('text')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            inputMode === 'text' 
              ? 'text-blue-900 bg-white border-b-2 border-blue-600' 
              : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50/50'
          }`}
        >
          Text Input
        </button>
        <button
          onClick={() => setInputMode('file')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${
            inputMode === 'file' 
              ? 'text-blue-900 bg-white border-b-2 border-blue-600' 
              : 'text-slate-500 hover:text-blue-600 hover:bg-blue-50/50'
          }`}
        >
          File Upload
        </button>
      </div>

      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
        {/* Input Area */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {inputMode === 'text' ? 'Data Source' : 'File Source'}
          </label>
          
          {inputMode === 'text' ? (
            <textarea
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              className="w-full h-32 p-3 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none font-mono selection:bg-blue-200"
              placeholder="Type something to hash..."
            />
          ) : (
            <div className="w-full h-32 border-2 border-dashed border-slate-200 rounded-md bg-slate-50 flex flex-col items-center justify-center relative group hover:border-blue-400 hover:bg-blue-50/30 transition-all">
              <input 
                type="file" 
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {fileInput ? (
                <div className="flex flex-col items-center p-4 text-center">
                  <FileText className="text-blue-600 mb-2" size={24} />
                  <span className="text-sm font-medium text-slate-900 truncate max-w-[200px]">
                    {fileInput.name}
                  </span>
                  <span className="text-xs text-slate-500">
                    {(fileInput.size / 1024).toFixed(2)} KB
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <FileUp className="text-slate-400 mb-2 group-hover:text-blue-500 transition-colors" size={24} />
                  <span className="text-sm text-slate-500 group-hover:text-blue-600 transition-colors">
                    Click or drag file
                  </span>
                </div>
              )}
            </div>
          )}
          <p className="text-[10px] text-slate-400">
            All processing happens locally in your browser. No data leaves your device.
          </p>
        </div>

        {/* Output Area */}
        <div className="flex flex-col gap-3 relative">
           <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex justify-between items-center">
            <span>SHA-256 Output</span>
            {isComputing && <RefreshCw className="animate-spin text-blue-500" size={12} />}
          </label>

          <div className="flex-1 bg-blue-950 rounded-md p-4 flex flex-col justify-between group relative overflow-hidden shadow-inner shadow-black/50">
            {/* Subtle Matrix Effect Background (CSS) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{backgroundImage: 'radial-gradient(circle, #60a5fa 1px, transparent 1px)', backgroundSize: '12px 12px'}}>
            </div>

            <div className="font-mono text-blue-100 text-sm break-all leading-relaxed z-10 selection:bg-blue-800">
              {hash || <span className="text-blue-400/50">Waiting for input...</span>}
            </div>

            <div className="flex justify-end mt-2 z-10">
               <button 
                onClick={handleCopy}
                disabled={!hash}
                className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy Hash'}
               </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Footer of Card */}
      <div className="bg-slate-50/50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
         <span>Algorithm: SHA-256</span>
         <span>Standard: FIPS 180-4</span>
      </div>
    </div>
  );
};

export default HashDemo;