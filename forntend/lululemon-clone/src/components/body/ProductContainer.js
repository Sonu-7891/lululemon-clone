import React from 'react'
import Products from '../../pages/Products';

function ProductContainer() {
  return (
    <div className=" mt-5 text-center">
      <h1 className="align-center text-6xl">Our most-wished-for gifts.</h1>
      <Products/>
      <button className="bg-white-300 m-10 text-black px-6 py-3 text-lg border-2 border-gray-900 font-semibold rounded hover:bg-black hover:text-white ">
        Shop WHAT'S NEW
      </button>
    </div>
  );
}


export default ProductContainer

