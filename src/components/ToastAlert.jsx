import { ToastContainer, toast } from "react-toastify";

const Notify = (message) => {
  const toastMessage = () => toast(message);

  return <ToastContainer />;
};

export default Notify;
