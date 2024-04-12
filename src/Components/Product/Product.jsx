import React from 'react'

export default function Product(props) {
  return (
    <>
      
          <div className='bg-stone-100 shadow-xl  w-60 p-2'>
              <div className='flex justify-center'>
                  <img className='' style={{width:'200px',height:"200px"}} src={props.veg_img} alt={props.veg_name} />
              </div>
              <div className=''>
                  <h2 className='text-center text-lg mt-4 mb-4 font-bold'>{props.veg_name}</h2>
                  <div className='block text-lg font-bold justify-around'>
                      <p>Price : {props.veg_price}</p>
                      <p>CPU : {props.veg_q}</p>  
                  </div>             
              </div>
          </div>
    </>
  )
}
