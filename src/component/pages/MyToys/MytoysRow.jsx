import React from 'react'

function MytoysRow({mytoy}) {
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
          
        <td><button className='btn mt-1 mb-1 mr-2'>Update</button></td>
        <td><button className='btn mt-1 mb-1'>Delete</button></td>
        
      </tr>
    
    </>
  )
}

export default MytoysRow