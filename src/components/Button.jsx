import { Loader2 } from 'lucide-react';
import React from 'react';

const Button = ({ title, type, disabled, onClick, className, isLoading, loadingText }) => {
  return (
    <button className={`bg-[#0071e3]  px-[20px] py-[7px] rounded-lg hover:bg-[#0077ED] cursor-pointer outline-none disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-400 w-fit h-fit flex items-center justify-center ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Loader2 className='mr-2 animate-spin' /> : null}
      <span>{isLoading ? loadingText : title}</span>
    </button>
  );
};

export default Button;