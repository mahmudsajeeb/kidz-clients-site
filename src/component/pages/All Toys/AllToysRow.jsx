import React from 'react'
import { Link } from 'react-router-dom'

function AllToysRow({toys}) {
  const {_id,name, toyName,subCategory,price,availableQuantity} = toys
  return (
 
    
  
     <tr>
        {/* <th>1</th>  */}
        <th>{name}</th> 
          
        <td>{toyName}</td> 
        <td>{subCategory}</td> 
        <td>{price}</td> 
        <td>{availableQuantity}</td> 
          
        <Link to={`/toy/${_id}`}><button className='btn mt-1 mb-1'>View Details</button></Link>
        
      </tr>
 
     
  )
}

export default AllToysRow