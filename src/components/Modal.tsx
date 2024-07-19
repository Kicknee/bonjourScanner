const Modal = ({ message }: { message: string }) => {
  return (
    <div className="d-flex align-items-center justify-content-center position-absolute">
      <div className="px-5 py-4 bg-input-color  shadow rounded-2 opacity-75">
        {message}
      </div>
    </div>
  );
};

export default Modal;
