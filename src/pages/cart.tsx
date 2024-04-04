import {useState,useEffect} from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-items";

const cartItems=[
  {
    productId:"asdasads",
    photo:"https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg",
    name:"Macbook",
    price: 3000,
    quantity:4,
    stock:10,
  },
];
const subtotal=4000;
const shippingCharges=200;
const tax=Math.round(subtotal*0.18);
const discount=400;
const total=subtotal+tax+shippingCharges;


const Cart = () => {
const[couponCode,setCouponCode]=useState<string>("");
const[isValidCouponCode,setIsValidCouponCode]=useState<boolean>(false);
useEffect(()=>{
  const timeOutId=setTimeout(()=>{
if(Math.random()>0.5) setIsValidCouponCode(true);
else setIsValidCouponCode(false);
  },1000);
return ()=>{
  clearTimeout(timeOutId);
  setIsValidCouponCode(false);
};
},[couponCode]);

  return (
    <div className="cart">
      <main>
{cartItems.map((i,idx)=>(
<CartItem key ={idx} cartItem={i}/>
))}
      </main>
      <aside>
<p>Subtotal: ₹{subtotal}</p>
<p>Shipping Charges: ₹{shippingCharges}</p>
<p>Tax: ₹{tax}</p>
<p>Discount:<em className="red">- ₹{discount}</em></p>
<p>
<b>Total: ₹{total}</b>
</p>
<input
type="text"
placeholder="Coupon Code"
value={couponCode}
onChange={(e) => setCouponCode(e.target.value)}
/>
    {
      couponCode && (isValidCouponCode ?(
<span className="green">
  ₹{discount} off using the<code>{couponCode}</code>
</span> ):(
<span className="red"> Invalid Coupon <VscError/> </span>))}
                            
      </aside>
    </div>
  );
};

export default Cart;
//<em> tag makes that occupied word int the tag italic to be different from others;