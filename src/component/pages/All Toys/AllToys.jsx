import React, { useEffect, useState } from 'react'
import useTitle from '../../../hook/UseTitle'
import AllToysRow from './AllToysRow'

function AllToys() {
  useTitle("All Toys")
  const [allToys,setToys] = useState([])

  useEffect(()=>{
    fetch('http://localhost:1000/alltoys')
    .then(res =>res.json())
    .then(data =>setToys(data))

  },[])
  return (
    <div>
    
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