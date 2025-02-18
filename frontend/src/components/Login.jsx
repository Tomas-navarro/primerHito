import React, { useState } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

const Login = () => {
    const emailDB = "userstester@pruebas.cl"
    const passwordDB = "123456"
    const [register, setRegister] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }
    const handleResults = (e) => {
        console.log('Los resultado son:', register)
    }
    const ValidarInput = (e) => {
        // Prevenimos el comportamiento por defecto
        e.preventDefault()
        const campos = {
            email: "El campo email no puede estar vacío!",
            password: "El campo password no puede estar vacío!"
        };
        const mostrarAlerta = (title, text, icon) => {
            Swal.fire({ title, text, icon })
        }
        console.log(register.email)
        for (const [campo, mensaje] of Object.entries(campos)) {
            if (!register[campo]) { // Equivalente a register[campo] === ''
                return mostrarAlerta("Campo vacío", mensaje, "error");
            }
        }  
        // Validar contraseñas
        if (register.password.length < 6) {
            return mostrarAlerta("Oops...", "Contraseña muy corta! Debe tener 6 o más caracteres", "question");
        }
        if (register.email !== emailDB) {
            return mostrarAlerta("Problema de Autenticación", "El email es incorrecto", "error");
        } else if (register.password !== passwordDB) {
            return mostrarAlerta("Problema de Autenticación", "Las contraseñas es incorrecta", "error");
        }
        mostrarAlerta("Usuario Logueado!", "", "success");
    }
    return (
        <>
            <div className="container mt-5" style={{maxWidth:"400px"}}>
                <h1 className='text-center'>Login</h1>
                <form className="formulario" onSubmit={ValidarInput}>
                    <div className="form-group d-flex flex-column">
                        <label className='p-2'>Email</label>
                        <input className="form-control" name="email" type="email" onChange={handleChange} />
                        <label className='p-2'>Password</label>
                        <input className="form-control" name="password" onChange={handleChange} />
                        <button className="btn btn-dark m-5" type="submit" onClick={handleResults}>Enviar</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login