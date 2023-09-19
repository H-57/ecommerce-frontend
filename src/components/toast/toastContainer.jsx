import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function toastContainer() {
  return (
    <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" transition={Flip} />
  )
}

export default toastContainer