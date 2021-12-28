import react from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning" >
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">SHIVIN</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" exact to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/cipet">CIPET</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" exact to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
