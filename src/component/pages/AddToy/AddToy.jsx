import React from 'react'
import useTitle from '../../../hook/UseTitle'
import { useForm } from "react-hook-form";

function AddToy() {
  useTitle("Add Toys")

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="pictureUrl" className="block mb-2 font-medium">
          Picture URL
        </label>
        <input
          type="text"
          id="pictureUrl"
          {...register('pictureUrl')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="sellerName" className="block mb-2 font-medium">
          Seller Name
        </label>
        <input
          type="text"
          id="sellerName"
          {...register('sellerName')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="sellerEmail" className="block mb-2 font-medium">
          Seller Email
        </label>
        <input
          type="email"
          id="sellerEmail"
          {...register('sellerEmail')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subCategory" className="block mb-2 font-medium">
          Sub-category
        </label>
        <input
          type="text"
          id="subCategory"
          {...register('subCategory')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block mb-2 font-medium">
          Price
        </label>
        <input
          type="number"
          id="price"
          {...register('price')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block mb-2 font-medium">
          Rating
        </label>
        <input
          type="number"
          id="rating"
          {...register('rating')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="availableQuantity" className="block mb-2 font-medium">
          Available Quantity
        </label>
        <input
          type="number"
          id="availableQuantity"
          {...register('availableQuantity')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-medium">
          Detail Description
        </label>
        <textarea
          id="description"
          {...register('description')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
   
    </>
  )
}

export default AddToy