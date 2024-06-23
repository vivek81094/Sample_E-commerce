import React from 'react'
const Button = ({name}) => {
  return (
    <button className=' p-2 mx-3 border rounded-lg text-white bg-red-500 font-medium hover:bg-green-500 hover:font-bold'>
      {name}
    </button>
  )
}

export default Button


