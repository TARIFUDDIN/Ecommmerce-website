import {FaPlus} from  "react-icons/fa";
type ProductProps={
productId:string;
photo:string;
name:string;
price:number;
stock:number;
handler:()=>void;
};
const server="ghjkhhuhj";
const ProductCard = ({productId,
  photo,
  name,
  price,
  stock,
  handler,}:ProductProps) => {
  return (
    <div className="productCard">
      <img src={photo}alt={name}/>
      <p>{name}</p>
      <span>₹{price}</span>
      <div>
        <button onClick={()=>handler()}>
          <FaPlus/>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
