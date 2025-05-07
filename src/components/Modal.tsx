import useModalState from "../store/hooks/useModalState";
import { showModalState } from "../store/slices/modalSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Modal = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const { show, message } = useModalState();
  const dispatch = useDispatch();

  if (!show) return;

  useEffect(() => {
    setFadeOut(true);
    const timer = setTimeout(() => {
      dispatch(showModalState(false));
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`custom-modal ${fadeOut ? "custom-fade" : ""}`}>
      <div className="custom-modal-dialog">{message}</div>
    </div>
  );
};

export default Modal;
