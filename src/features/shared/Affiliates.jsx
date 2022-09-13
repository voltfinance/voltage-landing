

const Affiliates = ({items=[]}) =>{   
    return (<div className="affiliates">

{
    items.map((img)=>(<img src={img} className="affiliates__image"/>))
}

    </div>)
}
export default Affiliates;
