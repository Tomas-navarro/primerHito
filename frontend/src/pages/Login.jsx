import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Login = () => {
    const [formData, setFormData] = useState({email: '',password: ''})
    const {login} = useContext(UserContext)
    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        // Prevenimos el comportamiento por defecto
        e.preventDefault()
        const mostrarAlerta = (title, text, icon) => {
            Swal.fire({ title, text, icon })
        }
        if(!formData.email || !formData.password){
            return mostrarAlerta("Campos vacíos", "Por favor, completa los campos", "error");
        }
        await login(formData.email, formData.password)
    }
    
    return (
        <>
            <div className="body">
                <h1 className='text-center'>Login</h1>
                <div className="container mt-5" style={{ maxWidth: "400px" }}>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <div className="form-group d-flex flex-column">
                            <label className='p-2'>Email</label>
                            <input className="form-control" name="email" type="email" onChange={handleChange} />
                            <label className='p-2'>Password</label>
                            <input className="form-control" name="password" onChange={handleChange} />
                            <button className="btn btn-dark m-5" type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login