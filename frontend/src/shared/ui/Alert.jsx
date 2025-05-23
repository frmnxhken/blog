import { useEffect, useState } from "react";
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
    base: "flex items-center gap-3 p-4 rounded-lg relative text-sm mb-6 overflow-hidden",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  const progressBarColors = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
  };

  const icons = {
    success: <AiOutlineCheckCircle size={24} />,
    warning: <AiOutlineWarning size={24} />,
    danger: <AiOutlineCloseCircle size={24} />,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      navigate(location.pathname, { replace: true, state: null });
    }, timeout);

    return () => clearTimeout(timer);
  }, [navigate, timeout]);

  const handleVisible = () => {
    setVisible(false);
    navigate(location.pathname, { replace: true, state: null });
  };

  if (!visible) return null;

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

      <div
        className={`absolute bottom-0 left-0 h-1 ${progressBarColors[type]}`}
        style={{
          width: "100%",
          animation: `progressBar ${timeout}ms linear forwards`,
        }}
      />
    </div>
  );
};

export default Alert;
