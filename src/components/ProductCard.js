import React from "react";
import { BiListPlus } from "react-icons/bi";

import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../features/cart/CartSlice";

const ProductCard = ({ product }) => {
  const {pathname}= useLocation()

const disPatch = useDispatch()


  return (
    <div
      className='shadow-lg rounded-3xl border relative  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >

{
  pathname.includes('cart')&&(
    <span className="w-8 h-8 absolute right-2 top-2 bg-indigo-900 rounded-full text-white font-bold flex items-center justify-center">{product.quantity}</span>
  )
}

      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature,index) => {
            return <li key={index} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>




      <div className='flex gap-2 mt-5'>

        {/* for other page */}

        {
          !pathname.includes('cart')&& (
            <button onClick={()=>disPatch(addToCart(product))} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Add to cart
          </button>
          )
        }
        {
          !pathname.includes('cart')&& (
            <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
          >
            <BiListPlus className='text-white' />
          </button>
          )
        }
        {/* for cart page */}

        {
          pathname.includes('cart')&& (
            <button onClick={()=>disPatch(removeFromCart(product))} className='bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
           Remove Product
          </button>
          )
        }




      </div>
    </div>
  );
};

export default ProductCard;
