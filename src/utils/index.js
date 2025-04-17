import toast from "react-hot-toast";

const style = {
  borderRadius: '10px',
  background: '#333',
  color: '#fff',
};

const toastSuccess = (message) => {
  toast.success(message, {
    style
  });
};

const toastError = (message) => {
  toast.error(message, {
    style
  });
};

export { toastSuccess, toastError };