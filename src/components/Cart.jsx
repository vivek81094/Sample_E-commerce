import React, { useState } from "react";
import Styled from "styled-components";
import { IoIosClose } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartActivity, setcartActivity] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate=useNavigate()
  const itemCount = cartItems.reduce(
    (initial, current) => initial + current.qty,
    0
  );
  const totalAmt = cartItems.reduce(
    (initial, current) => initial + current.price * current.qty,
    0
  );
  const  toastRemove= (name) => toast(`${name} is Removed`, {
    icon: '👋',
  });
  return (
    <>
        <div
        className={`absolute z-50 lg:w-[22vw]  w-[95vw]  h-full bg-slate-100 ${cartActivity ? "scale-x-100" : "scale-x-0 transition-all  delay-75 duration-50 ease-in-out"} top-0 right-1 border-slate-800 border rounded-lg`}
      >
        <div>
          <div className="m-5 flex items-center justify-between">
            <h1>My Order</h1>
            <IoIosClose
              onClick={() => setcartActivity(!cartActivity)}
              className="border border-slate-400 rounded hover:bg-red-300 hover:font-semibold cursor-pointer hover:border-none hover:text-white"
            />
          </div>
          <div>
            {cartItems.length === 0 && (
              <h1 className="flex justify-center p-4 font-bold text-lg">
                your cart is empty
              </h1>
            )}
            {cartItems.map((item) => {
              return (
                <ItemCart
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  price={item.price}
                  img={item.img}
                  qty={item.qty}
                  toastRemove={toastRemove}
                />
              );
            })}
          </div>
          <div className=" absolute bottom-[4rem] left-6 ">
            <h1>Total Items: {itemCount}</h1>
            <h1>Total Amount: {totalAmt}</h1>
          </div>
        </div>
        <div className=" absolute  bottom-1  flex justify-center items-center">
          <CartButton onClick={()=>navigate('./success')} className="lg:w-[20vw] w-[90vw] ">CHECKOUT</CartButton>
        </div>
      </div>
      <div
        className={`${cartActivity ? "scale-x-0" : "scale-x-100 transition-all  delay-500 ease-in "} shadow-lg absolute z-60 w-[3rem] h-[3rem] border bg-white rounded-[2rem] right-10 font-bold bottom-2  text-[1.5rem] flex justify-center items-center cursor-pointer ${itemCount > 0 && "animate-bounce delay-500 transition-all ease-in-out"}`}
      >
        <h1
          onClick={() => setcartActivity(!cartActivity)}
          className={`absolute bottom-5 right-[1.2rem] text-white text-[.6rem] font-light `}
        >
          {itemCount}
        </h1>
        <FaCartShopping onClick={() => setcartActivity(!cartActivity)} />
      </div>
    </>
  );
};

export default Cart;

export const CartButton = Styled.button`
padding: 10px;
  margin: 0 10px;
  font-weight:500;
  border: 4px;
  border-radius: 8px;
  color: white;
background-color: #f22f2f ;

&:hover{
  background-color: #dd0707;
  font-weight:600;
  
}
`;
