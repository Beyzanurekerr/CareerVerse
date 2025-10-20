import { useEffect } from "react";
import { motion } from "motion/react";
import { CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react";

interface AlertProps {
  type: "success" | "warning" | "info" | "error";
  message: string;
  onClose?: () => void;
  autoClose?: boolean;
  duration?: number;
}

export function Alert({
  type,
  message,
  onClose,
  autoClose = true,
  duration = 5000,
}: AlertProps) {
  useEffect(() => {
    if (autoClose && onClose) {
      const timer = setTimeout(() => onClose(), duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-white" />,
    warning: <AlertTriangle className="w-5 h-5 text-white" />,
    info: <Info className="w-5 h-5 text-white" />,
    error: <XCircle className="w-5 h-5 text-white" />,
  };

  const gradients = {
    success: "from-cyan-500 to-purple-600",
    warning: "from-yellow-400 to-orange-500",
    info: "from-blue-400 to-indigo-500",
    error: "from-rose-500 to-red-700",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[600px]"
    >
      <div
        className={`
          flex items-start justify-between gap-4 p-4 rounded-xl border shadow-lg
          backdrop-blur-md bg-gradient-to-r ${gradients[type]} 
          border-white/20 text-white
        `}
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            {icons[type]}
          </div>
          <p className="text-sm leading-snug font-medium">{message}</p>
        </div>

        <button
          onClick={onClose}
          className="text-white/80 hover:text-white font-bold text-lg"
        >
          ✕
        </button>
      </div>
    </motion.div>
  );
}
