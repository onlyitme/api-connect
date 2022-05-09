import React from 'react';
import {Link}  from "react-router-dom";


const Sidebar = ()  => {
    return (
        <nav className="sb-sidenav accordion sb-sidenav-light" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading">Menu</div>
                    <Link className="nav-link" to="/admin/dashboard">
                        <div className="sb-nav-link-icon">
                            <i className="fas fa-tachometer-alt" />
                        </div>
                        Tổng Quan
                    </Link>
                    <Link className="nav-link" to="/admin/books">

                        <div className="sb-nav-link-icon">
                            <i className="fas fa-tachometer-alt" />
                        </div>
                        Sách
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;