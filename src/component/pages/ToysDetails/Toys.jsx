import React from 'react'
import { useLoaderData } from 'react-router-dom'
 

export default function Toys() {
  const toyDetails = useLoaderData()
  console.log(toyDetails)
   
  return (
    <div className='max-w-7xl mx-auto m-auto'>
         <div className="max-w-xl  overflow-hidden shadow-lg bg-white mx-auto">
      <img className="w-full" src={toyDetails?.pictureUrl} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"> </div>
        <p className="text-gray-700 text-base mb-2">Toy Name: {toyDetails.toyName} </p>
        <p className="text-gray-700 text-base mb-2">Seller Name: {toyDetails.name} </p>
        <p className="text-gray-700 text-base mb-2">Email:{toyDetails?.sellerEmail}  </p>
        <p className="text-gray-700 text-base mb-2">Price:{toyDetails.price}  </p>
        <p className="text-gray-700 text-base mb-2">Rating:{toyDetails.rating}  </p>
        <p className="text-gray-700 text-base mb-2">Available Quantity:{toyDetails?.availableQuantity}  </p>
        <p className="text-gray-700 text-base mb-2">Description:{toyDetails?.description}  </p>
        <p className="text-gray-700 text-base"> </p>
      </div>
    </div>
    </div>
  )
}
