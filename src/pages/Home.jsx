import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Category from "../components/Category";
import DataItems from "../components/DataItems";
import Cart from "../components/Cart";

const Home = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const fakeData = async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products/");
      let data = await res.json();
      setData(data);
      let uniqueCategories = [
        ...new Set(data.map((clothes) => clothes.category)),
      ];

      setCategories(uniqueCategories);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fakeData();
  }, []);

  return (
    <div>
      <Navbar />
      <Category catData={categories} />
      <DataItems data={data} />
      <Cart />
    </div>
  );
};

export default Home;
