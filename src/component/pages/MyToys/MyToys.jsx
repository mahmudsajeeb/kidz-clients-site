import React, { useContext, useEffect, useState } from 'react'
import useTitle from '../../../hook/UseTitle'
import { AuthContext } from '../../../providers/AuthProviders'
import MytoysRow from './MytoysRow'
 

function MyToys() {
  useTitle("My Toys")
  const [mytoys,setMytoys] = useState([])
  const {user} = useContext(AuthContext)
  

  useEffect(()=>{
    fetch(`http://localhost:1000/mytoys/${user?.email}`)
    .then(res =>res.json())
    .then(data =>{
      setMytoys(data)
    })
  },[user])

  const toysDelete  = (id)=>{
    const confirmDelete = confirm("Are you want to delete?")
    if(confirmDelete){
        fetch(`http://localhost:1000/mytoys/${id}`,{
          method:"DELETE"
        })
        .then(res =>res.json())
        .then(data =>{
          if (data.deletedCount > 0) {
            console.log("Successfully deleted one document.");
            const remaining =mytoys.filter(b => b._id !== id )
            setMytoys(remaining)
          } else {
            console.log("There is Nothing for delete");
          }
        })
    }
}


  return (
    <div className='max-w-7xl mx-auto'>

<table className="table table-compact w-full">
    <thead>
      <tr>
       
        <th>Seller Name</th> 
        <th>Toy Name </th> 
        <th>Sub-category
        </th> 
        <th>Price</th> 
        <th>Available Quantity</th> 
        <th>Update</th> 
        <th>Action</th> 
         
      </tr>
    </thead> 
    <tbody>
      
      
    {
        mytoys.map(mytoy => <MytoysRow key={mytoy._id}   toysDelete={toysDelete}   mytoy={mytoy} />)
      }
      
    </tbody> 

  </table>
      
    </div>
  )
}

export default MyToys