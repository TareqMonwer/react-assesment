import clsx from "clsx";
import { FaInfoCircle } from "@react-icons/all-files/fa/FaInfoCircle";

const Notification = ({ type, message, location }) => {
  // location = topLeft | topRight | bottomLeft | bottomRight
  return (
    <div className="absolute  bottom-0 right-0 w-96">
      <div className={clsx("p-3 text-white font-bold mr-4 mb-4 flex items-center", {
        ['bg-green-700']: type === 'success',
        ['bg-pink-700']: type === 'error',
      })}>
        <div className="icon mr-2">
          <FaInfoCircle />
        </div>
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}

export default Notification;