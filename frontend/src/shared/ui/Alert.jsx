import { useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Alert = ({ type = "success", message, timeout = 1500 }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const alertStyles = {
    base: "flex items-center gap-3 p-4 rounded-lg relative text-sm mb-6",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  const icons = {
    success: <AiOutlineCheckCircle size={24} />,
    warning: <AiOutlineWarning size={24} />,
    danger: <AiOutlineCloseCircle size={24} />,
  };

  if (!visible) return null;

  setTimeout(() => {
    navigate(location.pathname, { replace: true, state: null });
  }, timeout);

  const handleVisible = () => {
    setVisible(!visible);
    navigate(location.pathname, { replace: true, state: null });
  };

  return (
    <div className={`${alertStyles.base} ${alertStyles[type]}`}>
      {icons[type]}
      <div className="flex-1">{message}</div>
      <button
        onClick={handleVisible}
        className="cursor-pointer absolute top-4 right-4 text-inherit hover:opacity-70"
        aria-label="Close"
      >
        <AiOutlineClose size={18} />
      </button>
    </div>
  );
};

export default Alert;
