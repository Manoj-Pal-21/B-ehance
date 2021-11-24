import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header-container">
            <nav className="main-nav">
                <div className="header-left">
                    <div className="logo">
                        <h1>
                            <Link to="/" className="link">Bēhance</Link>
                        </h1>
                    </div>
                    <div className="menu-link">
                        <ul>
                            <li className="active">
                                <h2><Link to="/Discover">Discover</Link></h2>
                            </li>
                            <li className="active1">
                                <h2><Link to="/Jobs">Jobs</Link></h2>
                            </li>
                            {/* <li>
                                <Link to="/Livestream">Livestream</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="header-right">
                    <div className="signup-login">
                        <button>
                            <Link to="/login" className="link1">Log In</Link>
                        </button>

                        <button>
                            <Link to="/SignUp" className="link1">Sign Up</Link>
                        </button>

                    </div>
                </div>
            </nav>
        </div>


    )
}

export default Header;