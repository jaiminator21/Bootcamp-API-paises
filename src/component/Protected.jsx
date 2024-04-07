import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'

const Protected = ({isAllowed, login,children, redirectTo ="/user"}) => {

    if(!isAllowed){
        return <Navigate to= {redirectTo}/>
    }

  return (
    children ? children: <Outlet />
  )
}

export default Protected