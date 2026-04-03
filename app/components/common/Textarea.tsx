import React, { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  containerClassName?: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, containerClassName = '', className = '', ...props }) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <textarea
        className={`w-full px-4 py-3 rounded-[10px] border-0 bg-[#FCFBFA] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#61A146] text-gray-800 placeholder-gray-600 min-h-[120px] resize-y ${className}`}
        {...props}
      />
    </div>
  );
};

export default Textarea;
