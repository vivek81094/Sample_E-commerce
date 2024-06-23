import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from './pages/Success'
import Error from './pages/Error'
import DataDetails from "./components/DataDetails";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
    const fakeData = async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products/");
      let data = await res.json();
      setData(data);
      } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fakeData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/detail/:id" element={<DataDetails data={data}/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
