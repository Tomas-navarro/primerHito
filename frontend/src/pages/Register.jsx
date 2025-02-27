import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Register = () => {

    const [register, setRegister] = useState({
        email: '',
        password: '',
        confirmpassword: ''
    })
    const handleChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }
    const handleResults = (e) => {
        console.log('Los resultado son:', register)
    }
    const ValidarInput = (e) => {
        e.preventDefault(); // Prevenir comportamiento por defecto
        const campos = {
            email: "El campo email no puede estar vacío!",
            password: "El campo password no puede estar vacío!",
            confirmpassword: "El campo Confirmar Password no puede estar vacío!"
        };
        // Función para mostrar alertas con SweetAlert2
        const mostrarAlerta = (title, text, icon) => {
            Swal.fire({ title, text, icon });
        };
        // Verificar si hay campos vacíos
        for (const [campo, mensaje] of Object.entries(campos)) {
            if (!register[campo]) { // Equivalente a register[campo] === ''
                return mostrarAlerta("Campo vacío", mensaje, "error");
            }
        }
        // Validar contraseñas
        if (register.password !== register.confirmpassword) {
            return mostrarAlerta("Problema de contraseñas", "Las contraseñas no son iguales", "question");
        }
        if (register.password.length < 6) {
            return mostrarAlerta("Oops...", "Contraseña muy corta! Debe tener 6 o más caracteres", "error");
        }
        // Si todo está correcto
        mostrarAlerta("Usuario Registrado!", "", "success");
    };

    return (
        <>
            <div className="body">
                <h1 className='text-center'>Register</h1>
                <div className="container mt-5" style={{ maxWidth: "400px" }}>
                    <form className="formulario" onSubmit={ValidarInput}>
                        <div className="form-group d-flex flex-column">
                            <label className='p-2'>Email</label>
                            <input className="form-control" name="email" onChange={handleChange} value={register.email} />
                            <label className='p-2'>Password</label>
                            <input className="form-control" name="password" type='Password' onChange={handleChange} value={register.password} />
                            <label className='p-2'>Confirmar Password</label>
                            <input className="form-control" name="confirmpassword" type='Password' onChange={handleChange} value={register.confirmpassword} />
                            <button className="btn btn-dark m-5" type="submit" onClick={handleResults}>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register