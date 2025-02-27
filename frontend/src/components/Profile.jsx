import React from 'react'

const Profile = () => {
    const userEmail="pruebatnavarro@gmail.com"
    return (
        <>
            <div className="body centrado">
                <div className="card mb-3">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Profile</h5>
                            <p className='text-muted'>Email: <strong>{userEmail}</strong></p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            <button type="button" className="btn btn-danger">Cerrar Sesion</button>

                        </div>
                </div>
            </div>
        </>
    )
}

export default Profile