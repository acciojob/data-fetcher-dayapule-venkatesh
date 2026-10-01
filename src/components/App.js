
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [product, setProduct]=useState("loading API...")
  useEffect(()=>{
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(data=>setProduct(data.products))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
        
      <pre>{product}</pre>
        
    </div>
  )
}

export default App
