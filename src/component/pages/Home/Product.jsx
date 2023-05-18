import React from 'react'

function Product() {
  return (
    <div className='grid   lg:grid-cols-3'>
   
<div className="bg-[#FBD6DA] h-[250px]   shadow-lg overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold text-slate-500 mb-2">Baby Jogger City Stroller</h2>
           
          <div className="mt-4">
            <span className="text-lg font-bold text-green-600">$19.99</span>
           
          </div>
          <button className="ml-4 px-5 mt-2 rounded-md py-2 bg-[#fa5c6c] text-white  ">
              Shop Now
          </button>
        </div>
        <div className="w-1/2 overflow-hidden relative">
          <img src="https://i.ibb.co/WPhMq4B/Screenshot-3.png" alt="kidzshop" className="h-[240px] transition-transform duration-300 hover:-translate-y-2 cursor-pointer" />
          
        </div>
      </div>
    </div>
<div className="bg-[#FFE6D0] h-[250px]   shadow-lg overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold text-slate-500 mb-2">Bodyguard Plus Baby Carseat
</h2>
           
          <div className="mt-4">
            <span className="text-lg font-bold text-green-600">$19.99</span>
           
          </div>
          <button className="ml-4 px-5 mt-2 rounded-md py-2 bg-[#fa5c6c] text-white  ">
              Shop Now
          </button>
        </div>
        <div className="w-1/2 overflow-hidden relative">
          <img src="https://i.ibb.co/hZjBCt7/Screenshot-1.png" alt="kidzshop" className="h-[240px] transition-transform duration-300 hover:-translate-y-2 cursor-pointer" />
          
        </div>
      </div>
    </div>
<div className="bg-[#FBD6DA] h-[250px]   shadow-lg overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold text-slate-500 mb-2">Zebra at Hape Toys
</h2>
           
          <div className="mt-4">
            <span className="text-lg font-bold text-green-600">$19.99</span>
           
          </div>
          <button className="ml-4 px-5 mt-2 rounded-md py-2 bg-[#fa5c6c] text-white  ">
              Shop Now
          </button>
        </div>
        <div className="w-1/2 overflow-hidden relative">
          <img src="https://i.ibb.co/XZZFnWN/Screenshot-4.png" alt="kidzshop" className="h-[240px] transition-transform duration-300 hover:-translate-y-2 cursor-pointer" />
          
        </div>
      </div>
    </div>
 
 
    
    </div>
  )
}

export default Product