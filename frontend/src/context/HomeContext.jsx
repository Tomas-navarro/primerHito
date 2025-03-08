import { createContext, useEffect, useState } from 'react'

export const HomeContext = createContext();
const HomeProvider = ({ children }) => {

    const [info, setInfo] = useState([])
    useEffect(() => {
        consultarApi()
    }, [])

    const consultarApi = async () => {
        try {
            const url = "http://localhost:5000/api/pizzas";
            const response = await fetch(url);
            const data = await response.json();
            setInfo(data);
        } catch (error) {
            console.log(error.message)
        }
    }

    const stateGlobal = {
        info
    }
    
    return (
        <HomeContext.Provider value={stateGlobal}>
            {children}
        </HomeContext.Provider>
    )
}

export default HomeProvider