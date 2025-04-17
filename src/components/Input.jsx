const Input = ({
  type = "text",
  placeholder,
  disabled = false,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <input
      className={` border-[1px] border-gray-400 rounded-lg outline-none px-5 placeholder-gray-400 text-gray-600 disabled:bg-gray-200 ${className}`}
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
