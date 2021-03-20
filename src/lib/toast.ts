import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export const SuccessToast = (message: string) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
  });
};

export const WarningToast = (message: string) => {
  toast.warning(message, {
    position: "top-right",
    autoClose: 5000,
  });
};
export const ErrorToast = (message: string) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
  });
};
