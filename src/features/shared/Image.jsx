const Image = ({ mobile,removeRatio=false, desktop,aligned='center',  height ,width}) => {
    
    console.log(height,'hconsole.error();')
  return (
    <>
      {desktop && <div style={{height:height+"px",width:width-(removeRatio?0:130)+'px'}} className={`desktop ${aligned==='left'&&'mr-auto'} ${aligned==='right'&&'ml-auto'}`}>
          
        <img style={{width:'100%',height:'100%',objectFit:'contain'}} className="desktop//#endregion" src={desktop} /></div>}
      {mobile && <img  className="mobile" src={mobile} />}
    </>
  );
};

export default Image;
