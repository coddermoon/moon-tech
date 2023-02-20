import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
const [products,setProducts]= useState([])
useEffect(() =>{
  fetch('https://raw.githubusercontent.com/coddermoon/moon-tech/main/products.json')
  .then(res=>res.json())
  .then(data=>setProducts(data))
},[])

console.log(products)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
     {
       products.map( pd => <ProductCard
       product={pd}
       /> )
       }
    </div>
  );
};

export default Home;
