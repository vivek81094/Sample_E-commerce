import React from "react";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { removeFromCart, increament, decreament } from "../redux/slices/cartItem";
import { useDispatch } from "react-redux";

const ItemCart = ({ id, name, img, price, qty, toastRemove}) => {
    const dispatch=useDispatch();
    const decreaseItem=()=>{
        qty>0 ? dispatch(decreament({id})): dispatch(removeFromCart({id}));        
    }

    const removeItem=()=>{
    
      dispatch(removeFromCart({id}))
      toastRemove(name)
    }

  return (
    <div>
      <div className="lg:w-[21vw] w-[92vw] h-full mx-1 p-1 bg-slate-200 rounded-lg relative flex lg:justify-start items-center mb-4">
        <div className="flex lg:justify-start items-center justify-between ">
        <img src={img} alt="img" className="w-[4rem] h-[4rem] mx-2" />
        <div className=" flex flex-col gap-2  font-medium text-xs w-[45vw] lg:w-[12vw] ">
          <h1 className="">{name.slice(0,15)} </h1>
          <h1 className="text-green-600">₹{price}</h1>
        </div>
        </div>
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
          <FiMinus onClick={decreaseItem} className="border border-slate-400 rounded hover:bg-red-300 hover:font-semibold cursor-pointer hover:border-none hover:text-white mx-2" />
          {qty}
          <IoIosAdd onClick={()=>{dispatch(increament({id}))}}  className="border border-slate-400 rounded hover:bg-green-300 hover:font-semibold cursor-pointer hover:border-none hover:text-white mx-2" />
        </div>
        <div className="absolute top-2 right-4 border  border-slate-400 rounded  cursor-pointer hover:bg-red-400 hover:text-white">
        <MdDelete onClick={removeItem} />
            
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
