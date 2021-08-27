import React from 'react'
import { Link } from 'react-router-dom'

const SidebarAdmin = () => {
    return (
        <div>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars" /></Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="index3.html" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="#" className="nav-link">Contact</Link>
                    </li>
                </ul>
                <form className="form-inline ml-3">
                    <div className="input-group input-group-sm">
                        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                </form>
            </nav>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            {/* <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" /> */}
                        </div>
                        <div className="info">
                            <Link to="#" className="d-block">Trần Tiến Thành</Link>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <div className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <Link to="/admin/dashboard" className="nav-link">
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        Dashboard
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item has-treeview">
                                <Link to="/admin/products" className="nav-link">
                                    <i className="nav-icon fas fa-book" />
                                    <p>
                                        Product Page
                <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                            </li>
                            <li className="nav-item has-treeview">
                                <Link to="/admin/categories" className="nav-link">
                                    <i className="nav-icon fas fa-book" />
                                    <p>
                                        Category Page
                <i className="fas fa-angle-left right" />
                                    </p>
                                </Link>
                            </li>
                        </div>
                    </nav>
                </div>
            </aside>
        </div>
    )
}

export default SidebarAdmin
