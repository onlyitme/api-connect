import React from 'react';
import { Link}  from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* Navbar Brand*/}
            <Link className="navbar-brand ps-3" to={'/admin'}>
                Thư Viện Sách
            </Link>
            {/* Sidebar Toggle*/}
        </nav>
    );
};

export default Navbar;
