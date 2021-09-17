const Input = ({ label, id, onChange, ...props }) => {
  // const errorInputBorderStyles = "border-red-500";
  // const errorMsgStyles = "text-red-500 text-xs italic";

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={id}
        onChange={e => onChange(e.target.value)}
        {...props}
      />
      {/* put error message here */}
    </>
  );
};

export default Input;
