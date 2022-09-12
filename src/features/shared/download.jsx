const Download = ({ src,onClick, header, subheader }) => {
  return (
    <div onClick={onClick} className="download">
      <img src={src} className="download__logo" />
      <div className="download__container">
        <div className="download__header">{header}</div>
        <div className="download__subheader">{subheader}</div>
      </div>
    </div>
  );
};

export default Download;
