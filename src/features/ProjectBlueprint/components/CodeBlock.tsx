import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-8 rounded-lg overflow-hidden border border-gray-700 bg-[#0B0F19] group shadow-2xl">
      <div className="flex justify-between items-center px-4 py-3 bg-[#111827] border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#22d3ee]" />
          <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">{language || 'CODE'}</span>
        </div>
        <button onClick={handleCopy} className={`flex items-center gap-2 text-xs font-mono transition-all duration-300 ${copied ? 'text-green-400' : 'text-gray-500 hover:text-[#22d3ee]'}`}>
          {copied ? <Check size={14} /> : <Copy size={14} />}{copied ? 'COPIED' : 'COPY'}
        </button>
      </div>
      <div className="p-0 overflow-x-auto"><pre className="p-4 font-mono text-[13px] leading-6 text-gray-300"><code>{code.trim()}</code></pre></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22d3ee]/40 to-transparent opacity-50" />
    </div>
  );
};