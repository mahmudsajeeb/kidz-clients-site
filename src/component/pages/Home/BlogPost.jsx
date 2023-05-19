import React from 'react'

function BlogPost() {
  return (
    <div className='mt-16'>
    <h1 className='text-4xl font-semibold text-center hover:text-blue-500 cursor-pointer'>Blog Post</h1>
    <hr className='w-48 border-t-2 mx-auto mb-6 mt-4 border-orange-600 ' />
    <div className='grid lg:grid-cols-2 gap-4'>
    <div className="card card-side bg-base-100  border">
  <figure><img src="https://i.ibb.co/tC2pTS7/ob.png" alt="Movie"/></figure>
  <div className="card-body flex justify-center items-center">
  <p className='text-gray-400'> Septemner 2021</p>
    <h2 className="card-title">Few quips galvanized the mock jury box</h2>
     
     
      <button className=" text-blue-400 ">Read More</button>
    
  </div>
</div>
    <div className="card card-side bg-base-100  border">
  <figure><img src="https://static01.nyt.com/images/2013/08/16/arts/16TOYGAMES01_SPAN/0816TOYGAMESjp01-superJumbo.jpg" alt="Movie"/></figure>
  <div className="card-body flex justify-center items-center">
  <p className='text-gray-400'> Dec 2019</p>
    <h2 className="card-title">The Virtual World Welcomes Toy Players - The New York Times</h2>
     
     
      <button className=" text-blue-400 ">Read More</button>
    
  </div>
</div>
    <div className="card card-side bg-base-100  border">
  <figure><img src="https://m.media-amazon.com/images/I/71Ru3LruHHL._AC_SL1500_.jpg" alt="Movie"/></figure>
  <div className="card-body flex justify-center items-center">
  <p className='text-gray-400'> Jan 2020</p>
    <h2 className="card-title">Toddler Toys Age 1-2 - Musical Piano Drum Set Toys for Toddlers 1-3 - 1 Year Old Girl Gifts Baby Toys 12-18</h2>
     
     
      <button className=" text-blue-400 ">Read More</button>
    
  </div>
</div>
    <div className="card card-side bg-base-100  border">
  <figure><img src="https://www.splashlearn.com/blog/wp-content/uploads/2023/02/best-educational-toys-for-kids-that-all-parents-need-to-know-about.jpeg" alt="Movie"/></figure>
  <div className="card-body flex justify-center items-center">
  <p className='text-gray-400'> Septemner 2021</p>
    <h2 className="card-title">Educational and Learning Toy</h2>
     
     
      <button className=" text-blue-400 ">Read More</button>
    
  </div>
</div>
 
    </div>
    
    </div>
  )
}

export default BlogPost