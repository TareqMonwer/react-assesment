import clsx from "clsx";

const Input = ({ label, id, error, onChange, ...props }) => {
  const inputStyle = "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
  const errorInputBorderStyles = "border-red-500";
  const errorMsgStyles = "text-red-500 text-xs italic";

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={clsx(inputStyle, {
          [errorInputBorderStyles]: error,
        })}
        id={id}
        onChange={e => onChange(e.target.value)}
        {...props}
      />
      {error && (
        <p className={errorMsgStyles}>{error}</p>
      )}
    </>
  );
};

export default Input;
