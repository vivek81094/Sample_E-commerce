import React from 'react'
import { FaStar } from "react-icons/fa";
import Button from './Button';
import {useDispatch} from 'react-redux'
import {addtoCart} from '../redux/slices/cartItem'
import { Link } from 'react-router-dom';
const DataCard = ({name, price, img, desc, id, toaster}) => {
  const dispatch=useDispatch()
  return (
    <div className='w-[250px] h-[400px] bg-slate-200 rounded-lg  p-4 relative'>
      <Link to={`/detail/${id}`} >
      <img src={img} alt="img" onClick={()=><itemDetail/>} className='w-[10rem] h-[10rem] m-auto mb-4 cursor-grab' />
      </Link>
      <div className=' flex justify-between font-semibold mb-4'> <h1>{name.slice(0,20)} </h1><h1 className='text-green-600'>₹{price!=null?price:'N/A'}</h1></div>
      <div> <p className='text-sm'>{desc?desc.slice(0, 50):'No description'}...</p> </div>
      <div className="flex justify-between gap-12 py-3  absolute bottom-1">
          <span className="flex justify-between items-center font-bold">
            <FaStar  className="text-yellow-400  mr-1"  />4.5
            {/* {rating} */}
          </span>
          <div onClick={()=>{dispatch(addtoCart({id, name, img, price, qty:1,})), toaster(name) }}>
          <Button name={"Add to Cart"}></Button>
          </div>
        </div>
    </div>
  )
}

export default DataCard;
