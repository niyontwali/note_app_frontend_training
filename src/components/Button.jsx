import React from 'react';

const Button = ({ title, type, disabled,buttonBg }) => {
  return (
    <button className={`bg-[#0071e3] text-white px-[20px] py-[7px] rounded-2xl hover:bg-[#0077ED] transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer focus:ring-[3px] focus:ring-blue-200 focus:ring-offset-[1px] outline-none mt-[10vh] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-400 ${buttonBg}`}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;