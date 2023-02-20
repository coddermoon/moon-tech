import React from 'react';

const CartProduct = ({product}) => {
    return (
<div
      className='shadow-lg relative rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
        {/* number */}
        <span className='absolute right-0 top-0 bg-indigo-500 py-2 px-4 rounded text-white font-bold'>3</span>

      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        <button  className='bg-orange-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
          Remove From Cart
        </button>

      </div>
    </div>
    );
};

export default CartProduct;