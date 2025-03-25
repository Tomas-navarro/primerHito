import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {

    const {user,logout} = useContext(UserContext)

    
    return (
        <>
            <div className="body centrado">
                <div className="card mb-3">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Profile</h5>
                        {user ? (
                            <>
                                <p className='text-muted'>Email: <strong>{user.email}</strong></p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                <button type="button" className="btn btn-danger" onClick={logout}>Cerrar Sesion</button>
                            </>
                        ) : (
                            <p className="text-muted">Cargando perfil...</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
    
}

export default Profile