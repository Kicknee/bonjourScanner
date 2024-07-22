import useModalState from "../state/hooks/useModalState";
import { showModalState } from "../state/slices/modalSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Modal = () => {
  const { message } = useModalState();
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(showModalState(false));
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="modal"
      className="d-flex align-items-center justify-content-center position-absolute"
    >
      <div className="px-5 py-4 bg-input-color  shadow rounded-2 opacity-75">
        {message}
      </div>
    </div>
  );
};

export default Modal;
