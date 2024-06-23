import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/categoryItem";

const Category = ({catData}) => {
  
const dispatch=useDispatch();
const myCategory=(category)=>{
  dispatch(setCategory(category))
}

const selectedCategory=useSelector((state)=>state.category.category)

  return (
    <div className="flex mx-3 flex-col my-3">
      <h1 className="font-bold text-3xl text-black">Data Items</h1>
      <div className="flex gap-3">
        <button onClick={()=>dispatch(setCategory('All'))} name='All' className={`p-2 mx-3 border rounded-lg text-white bg-red-500 font-medium hover:bg-green-500 hover:font-bold ${selectedCategory==="All"?'bg-green-400':'bg-red-500'}`}>All</button>

        {catData.map((category, id)=>{
       return (<button key={id} name={category} onClick={()=>myCategory(category)} className={`p-2 mx-3 border rounded-lg text-white bg-red-500 font-medium hover:bg-green-500 hover:font-bold ${selectedCategory===category?'bg-green-400':'bg-red-500'}`} >{category}</button>)}
          )}

      </div>
    </div>
  );
};

export default Category;
