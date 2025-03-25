import React, { useState, useRef } from 'react';

const Collapse = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={`backdrop-blur-lg bg-white/10 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-shadow duration-300 ${
        open ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div
        className="px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        onClick={() => setOpen(!open)}
      >
        <span className="text-lg font-medium text-gray-800 dark:text-white">
          {title}
        </span>
        <span
          className={`transform ${open ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
        >
          {open ? '▲' : '▼'}
        </span>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0',
        }}
      >
        <div className="px-6 py-4 border-t border-gray-300 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-400">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
