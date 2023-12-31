import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({children}) {
  const {user} = useContext(AuthContext)
  const location = useLocation()

  if(user?.email){
    return children
  }
  return (
    <Navigate to='/login' state={{from:location}} replace></Navigate>
  )
}

export default PrivateRoute