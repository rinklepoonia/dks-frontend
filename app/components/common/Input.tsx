import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

const Input: React.FC<InputProps> = ({ label, containerClassName = '', className = '', ...props }) => {
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        className={`w-full px-4 py-3 rounded-[10px] border-0 bg-[#FCFBFA] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#61A146] text-gray-800 placeholder-gray-600 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
