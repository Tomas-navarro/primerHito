import { useContext } from 'react'
import { UserContext } from './UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
  const {user} = useContext(UserContext) 
  console.log("Estado del usuario en ProtectedRoute:", user);
  return ( user ? children : <Navigate to='/login'/>)
}

export default ProtectedRoute