const SectionDivider = () => {
  return (
    <div className="col-1 d-flex align-items-center" style={{ width: "3px" }}>
      <div
        className="row"
        style={{
          height: "85%",
          width: "1px",
          borderRight: "2px dashed #787f29",
        }}
      ></div>
    </div>
  );
};

export default SectionDivider;
