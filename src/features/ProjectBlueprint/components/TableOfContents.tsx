import React from 'react';
import { motion } from 'framer-motion';

type TocItem = {
  id: string;
  text: string;
};

interface TableOfContentsProps {
  items: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-24 h-fit">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">На странице</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <a 
              href={`#${item.id}`} 
              className="block text-xs text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 border-l-2 border-gray-800 hover:border-[#22d3ee] pl-3"
            >
              {item.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </aside>
  );
};