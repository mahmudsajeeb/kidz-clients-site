import React from 'react'
import { Link } from 'react-router-dom'

function MytoysRow({mytoy,updatedToys,toysDelete}) {
  const {_id,name, toyName,subCategory,price,availableQuantity} = mytoy

  return (
    <>
     <tr>
        {/* <th>1</th>  */}
        <th>{name}</th> 
          
        <td>{toyName}</td> 
        <td>{subCategory}</td> 
        <td>{price}</td> 
        <td>{availableQuantity}</td> 
        {/* <td><button onClick={()=>updatedToys(_id)} className='btn mt-1'>Update</button></td> */}
          
        <td> <Link to={`/updatetoys/${_id}`}><button className='btn mt-1 mb-1 mr-2'>Update</button></Link></td>
        <td><button onClick={()=>toysDelete(_id)} className='btn mt-1 mb-1'>Delete</button></td>
        
      </tr>
    
    </>
  )
}

export default MytoysRow