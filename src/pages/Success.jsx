import React from 'react'
import { IoIosClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate=useNavigate()
  return (
    <div className='flex justify-center items-center h-screen font-extrabold text-xl'>
      <h1>😊Order Successful!😊</h1>
      <IoIosClose
              onClick={() => navigate('/')}
              className=" absolute
              top-4 right-4 border border-slate-400 rounded hover:bg-red-300 hover:font-semibold cursor-pointer hover:border-none hover:text-white"
            />
      
    </div>
  )
}

export default Success
