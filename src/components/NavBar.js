import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav className="container">
                <ul className="menu">
                    <li>
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/repositories" className="nav-link">
                            Repos
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;