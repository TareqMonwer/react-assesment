import clsx from "clsx";

const Button = ({fluid, onClick, ...props}) => {
  return (
    <button
      className={clsx('bg-indigo-700 text-white px-3 py-2 rounded', {
        'w-full': fluid,
      })}
      onClick={onClick}
      {...props}
    >
      Button
    </button>
  );
}

export default Button;