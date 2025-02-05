import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const ValidarInput = (e) => {
        // Prevenimos el comportamiento por defecto
        e.preventDefault()
    
        if (nombre === ''){
          alert('Debes agregar un nombre')
        }
      }
    return (
        <>
            <form  className="formulario" onSubmit={ValidarInput}>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" name="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <label>Password</label>
                    <input className="form-control" name="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <label>Confirmar Password</label>
                    <input className="form-control" name="Confirmar Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                    <button className="btn btn-dark mt-3" type="submit">Enviar</button>
                </div>
            </form>
        </>
    )
}

export default Register