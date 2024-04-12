import React, { useState } from 'react'
import Product from './Product/Product'
import Data_veg from './Product/Data'
import axios from "axios";


export default function Product_List() {

  window.addEventListener("load", () => {
    axios.get("https://dummyapi.online/api/products").then((res) => {
      setAPI(res.data);
    })
  })
  const [api, setAPI] = useState([])
  return (
    <>
      <h1 className='text text-center font-bold text-2xl my-10'>Apple Products</h1>
      <div className=' mx-auto grid grid-cols-4 my-10 ps-10 gap-5'>
        {
          api.map((val) => (
            <Product veg_name={val.name} veg_img={val.featuredImage} veg_price={val.basePrice} veg_q={val.CPU} />
          ))
        }
      </div>
    </>
  )
}
