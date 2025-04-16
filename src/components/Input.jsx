const Input = ({
  type = "text",
  placeholder,
  disabled = false,
  value,
  onChange,
  moreStyle,
  ...props
}) => {
  return (
    <input
      className={` border-[1px] border-gray-400 rounded-lg outline-none focus:ring-1 focus:ring-offset-[1px] focus:ring-gray-200 px-5 placeholder-gray-400 text-gray-600 disabled:bg-gray-200 ${moreStyle}`}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;
