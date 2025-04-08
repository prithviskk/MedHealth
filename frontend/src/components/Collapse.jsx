import React, { useState, useRef } from 'react';

const Collapse = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={`rounded-xl border transition-all duration-300 ${
        open ? 'shadow-lg' : 'shadow-sm'
      } bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700`}
    >
      {/* Header */}
      <div
        className="px-5 py-4 flex justify-between items-center cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </span>
        <span
          className={`transition-transform duration-300 transform text-gray-500 dark:text-gray-300 ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
        >
          ▼
        </span>
      </div>

      {/* Content Area with Animated Height */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out border-t border-gray-200 dark:border-gray-600"
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : '0',
        }}
      >
        <div className="px-5 py-4 text-sm sm:text-base text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
