import useModalState from "../state/hooks/useModalState";
import { showModalState } from "../state/slices/modalSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Modal = () => {
  const { message } = useModalState();
  const dispatch = useDispatch();
  const [fadeClass, setFadeClass] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(showModalState(false));
      setFadeClass("fade");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`d-flex align-items-center justify-content-center position-absolute z-3 ${fadeClass}`}
    >
      <div className="px-5 py-4 bg-input-color shadow rounded-2 ">
        {message}
      </div>
    </div>
  );
};

export default Modal;
