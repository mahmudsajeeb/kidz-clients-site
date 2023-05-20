 import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2' 
 function UpdateToys() {
  const toysLoader = useLoaderData()
  console.log(toysLoader)

  const handleUpdate = (e) =>{
      e.preventDefault()
      const form = e.target 
      const price = form.price.value
      const availableQuantity = form.availableQuantity.value 
      const description = form.description.value 
      const updatedToy = {price,availableQuantity,description}
     

      fetch(`http://localhost:1000/alltoys/${toysLoader._id}`,{
        method:"PUT",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updatedToy)
      })
      .then(res =>res.json())
      .then(data => {
          console.log(data)

          if(data.modifiedCount > 0){
            Swal.fire({
              title: 'success',
              text: 'Toy Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
             
          }
      })
  }
   return (
     <div>
       <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Update My Toy Information</h1>
      <form onSubmit={handleUpdate} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
             defaultValue={toysLoader?.price}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="availableQuantity"
            type="number"
             defaultValue={toysLoader?.availableQuantity}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
          defaultValue={toysLoader?.description}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>

     
     </div>
   )
 }
 
 export default UpdateToys