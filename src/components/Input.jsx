const Input = ({
  type = "text",
  placeholder,
  disabled = false,
  value,
  onChange,
  required = true,
  moreStyle,
}) => {
  return (
    <input
      // style={{ backgroundColor: 'blue' }}
      className={`bg-gray-100 border-[1px] border-gray-400 rounded-2xl outline-none focus:ring-1 focus:ring-offset-[1px] focus:ring-gray-200 px-5 placeholder-gray-400 text-gray-600 disabled:bg-gray-200 ${moreStyle}`}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
