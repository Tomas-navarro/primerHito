
const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
                    <div className="navbar-nav gap-3 d-flex flex-row">
                        <a className="nav-link active border border-light px-2 rounded" aria-current="page" href="#">🍕Home</a>
                        <a className="nav-link active border border-light px-2 rounded" aria-current="page" href="#">🔐Profile</a>
                        {token ? (
                            <>
                                <a className="nav-link active border border-light px-2 rounded" aria-current="page" href="#">🔐 Profile</a>
                                <a className="nav-link active border border-light px-2 rounded" aria-current="page" href="#">🔐 Logout</a>
                            </>
                        ) : (
                            <>
                                <a className="nav-link active border border-light px-2 rounded" aria-current="page" href="#">🔓 Login</a>
                                <a className="nav-link active border border-light px-2 rounded" aria-current="page" href="#">🔓 Register</a>
                            </>
                        )}

                        <a className="nav-link active border border-info rounded text-info position-absolute px-2 top-0 end-0 me-2 mt-2" aria-current="page" href="#">🛒 Total: ${total.toLocaleString()}</a>
                    </div>
                </div>
            </nav>
        </>
    );
};


export default Navbar