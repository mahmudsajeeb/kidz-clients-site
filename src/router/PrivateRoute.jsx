import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProviders'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
  const {user} = useContext(AuthContext)

  if(user?.email){
    return children
  }
  return (
    <Navigate to='/login' replace></Navigate>
  )
}

export default PrivateRoute