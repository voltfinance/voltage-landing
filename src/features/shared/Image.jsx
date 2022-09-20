const Image = ({
  mobile,
  removeRatio = false,
  desktop,
  aligned = "center",
  height,
  width,
}) => {
  return (
    <>
      {desktop && (
        <div
          className={'image'}
          style={{
            maxHeight: (height/16) + "rem"||'auto',
            maxWidth:( width/16)  + "rem",
          }}

          className={`image__desktop  
          ${aligned === "left" && "mr-auto"} 
          ${aligned === "right" && "ml-auto"}`
        }
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            className="desktop"
            src={desktop}
          />
        </div>
      )}
      {mobile && <img className="mobile" src={mobile} />}
    </>
  );
};

export default Image;
