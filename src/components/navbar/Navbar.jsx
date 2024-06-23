import React from 'react'
import { useDispatch } from 'react-redux'
import {setSearch} from '../../redux/slices/searchItem'

const Navbar = () => {
const dispatch=useDispatch()
const search=(e)=>{
  dispatch(setSearch(e.target.value))
      }
  return (
    
      <nav className='flex justify-between mx-5 my-5'>
        <div className='text-gray-500 text-lg '>
            <h1>{new Date().toUTCString().slice(0, 16)}</h1>
        </div>
<div>
    <input onChange={(e)=>search(e)} name='searchbox' className='border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[18vw] p-2' type="search" placeholder='search' />
</div>
      </nav>
    
  )
}

export default Navbar
