import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/home"> <i className="fas fa-home "></i> <span>home</span> </Link>
                <Link to="/about"> <i className="fas fa-user"></i> <span>about</span> </Link>
                <Link to="/portfolio"> <i className="fas fa-briefcase"></i> <span>portfolio</span></Link>
                <Link to="/blogs"> <i className="fas fa-blog"></i> <span>blogs</span> </Link>
                <Link to="/contact"> <i className="fas fa-address-book"></i> <span>contact</span> </Link>
            </nav>
        </div>
    );
};

export default Navigation;