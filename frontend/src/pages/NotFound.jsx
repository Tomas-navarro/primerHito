import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="body">
        <div className="text-center centrado not-found">
          <h1 >Error 404. <br /> No existe esta pagina</h1>
          <Link to="/" className="btn btn-primary">Volver al incio</Link>
        </div>

      </div>
    </>
  )
}

export default NotFound