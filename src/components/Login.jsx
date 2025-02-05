import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ValidarInput = (e) => {
        // Prevenimos el comportamiento por defecto
        e.preventDefault()

        if (email === '') {
            alert('Debes agregar un email')
        } else if (password === '') {
            alert('Debes agregar una contraseña')
        }
    }
    return (
        <>
            <div className="container ">
                <form className="formulario" onSubmit={ValidarInput}>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" name="Email" onChange={(e) => setEmail(e.target.value)} />
                        <label>Password</label>
                        <input className="form-control" name="Password" onChange={(e) => setPassword(e.target.value)} />
                        <button className="btn btn-dark mt-3" type="submit">Enviar</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login