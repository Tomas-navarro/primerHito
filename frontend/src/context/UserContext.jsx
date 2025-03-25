import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const mostrarAlerta = (title, text, icon) => {
        Swal.fire({ title, text, icon })
    }
    // Cargar perfil automáticamente al montar el componente
    useEffect(() => {
        profile();
    }, []);

    const login = async (userEmail, password) => {
        try {
            const URL = 'http://localhost:5000/api/auth/login';
            const payload = { email: userEmail, password };
            const res = await axios.post(URL, payload);
            localStorage.setItem('token', res.data.token);
            setUser(res.data);
            return true;
        } catch (error) {
            console.error(error);
            mostrarAlerta("Error", error.message, "error")
            return false;
        }
    };

    const register = async (userEmail, password) => {
        try {
            const URL = 'http://localhost:5000/api/auth/register';
            const payload = { email: userEmail, password };
            const res = await axios.post(URL, payload);
            localStorage.setItem('token', res.data.token);
            setUser(res.data);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    };

    const profile = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const res = await axios.get('http://localhost:5000/api/auth/me', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(res.data);  
            } catch (error) {
                console.error(error);
                logout();
            }
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        console.log('User logged out');
    };

    const stateGlobal = {
        user,
        login,
        register,
        profile,
        logout
    };

    return (
        <UserContext.Provider value={stateGlobal}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
