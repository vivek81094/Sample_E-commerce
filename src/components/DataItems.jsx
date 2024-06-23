import React from 'react'
import DataCard from './DataCard'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const DataItems = ({data}) => {
const notify = (name) => toast.success(`${name} is Added`)
const category = useSelector(state=> state.category.category)
const search=useSelector((state)=>state.search.search)

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='flex flex-wrap  lg:justify-start justify-center gap-3 mx-6'>

      {data.filter((clothes)=>{
        if(category==='All'){
          return clothes.title.toLowerCase().includes(search.toLowerCase());
        }else{
          return (category===clothes.category && clothes.title.toLowerCase().includes(search.toLowerCase())
         
          )
        }
      }).map((item)=>{
        return  <DataCard  key={item.id}
        id={item.id}
        name={item.title}
        img={item.img}
        desc={item.description}
        toaster={notify}
       price={item.price}
        
        />
        
      })}
  
    </div>
  </>
  )
}

export default DataItems
