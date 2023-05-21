import React, { useEffect, useState } from 'react'
import useTitle from '../../../hook/UseTitle'
import AllToysRow from './AllToysRow'

function AllToys() {
  useTitle("All Toys")
  const [allToys,setToys] = useState([])
  const [searchText,setSearchText] = useState('')

  useEffect(()=>{
    fetch('https://toys-murex.vercel.app/alltoys')
    .then(res =>res.json())
    .then(data =>setToys(data))

  },[])

  const handleSearch = () => {
    fetch(`https://toys-murex.vercel.app/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };
  return (
    <div className='max-w-7xl mx-auto'>
    <div className="flex mb-6 justify-center">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
        className="border w-80 border-gray-300 rounded-l py-2 px-4 outline-none"
      />{""}
      <button onClick={handleSearch} className="bg-blue-500 text-white rounded-r py-2 px-4 ml-1">
        Search
      </button>
    </div>
    <div >
  <table className="table table-compact w-full">
    <thead>
      <tr>
       
        <th>Seller Name</th> 
        <th>Toy Name </th> 
        <th>Sub-category
        </th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Details</th> 
         
      </tr>
    </thead> 
    <tbody>
      
      
      {
        allToys.map(toys => <AllToysRow key={toys._id} toys={toys}/>)
      }
      
      
    </tbody> 

  </table>
</div>
    </div>
  )
}

export default AllToys