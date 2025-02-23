import { toast } from "react-toastify";

const ToastUtil = (message, type) => {
  toast[type](message, {
    position: "bottom-left",
    theme: "dark",
    closeOnClick: true,
  });
};

export default ToastUtil;
