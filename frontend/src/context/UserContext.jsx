import  { createContext, useState } from 'react'

export const UserContext = createContext()
const UserProvider = ({children}) => {
    const [user, setUser] = useState(true)
    const login = (credentials) =>{
        if(credentials.email==="prueba@gmail.com"&& credentials.password ==="12345"){
            setUser({
                id:1,
                name:"Prueba",
                email: credentials.email
            })
            return true
        }
        return false
    }
    const logout = () => {
        setUser(false)
    }
    const stateGlobal ={
        user,
        login,
        logout
    }
  return (
    <>
        <UserContext.Provider value={stateGlobal}>
            {children}
        </UserContext.Provider>
    </>
  )
}

export default UserProvider