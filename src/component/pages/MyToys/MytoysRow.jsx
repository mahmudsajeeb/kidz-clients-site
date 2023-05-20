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
          
        <button className='btn mt-1 mb-1'>View Details</button>
        
      </tr>
    
    </>
  )
}

export default MytoysRow