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
        <th>Details</th> 
         
      </tr>
    </thead> 
    <tbody>
      
      
    {
        mytoys.map(mytoy => <MytoysRow   mytoy={mytoy} />)
      }
      
    </tbody> 

  </table>
      
    </div>
  )
}

export default MyToys