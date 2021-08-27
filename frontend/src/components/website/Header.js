import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderTop from './header-top'

const Header = (props) => {
    return (
        <div>
            <header>
                <HeaderTop />
                <section className="header-center">
                    <div className="header-center-container">
                        <div className="header-center-logo">
                        </div>
                        <div className="header-center-search">
                            <form id="form-search-product">
                                <input type="search" id="search-product" placeholder="Search" />
                                <button className="search-sanpham">
                                    <i className="fa fa-search" />
                                </button>
                            </form>
                            <div className="header-center-cart">
                                <NavLink to="#">
                                    <i className="fas fa-shopping-cart" />
                                    <span> 0 sp - 0đ </span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="header-bottom">
                    <div className="header-bottom-container">
                        <div className="navbar-left">
                            <div className="menubar-left">
                                <span>
                                    <i className="fas fa-list" />
                                    <NavLink to="">DANH MỤC SẢN PHẨM</NavLink>
                                </span>
                                <i className="fas fa-chevron-circle-down" />
                            </div>
                            <ul className="menu-content">
                                {props.categories.map((category, index) => (
                                    <li key={index}>
                                        <NavLink to={`/category/${category._id}`}>
                                            {category.name}
                                            <span>
                                                <i className="fas fa-chevron-right" />
                                            </span>
                                        </NavLink>
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <nav className="navbar-right">
                            <ul>
                                <li>
                                    <NavLink to="/">TRANG CHỦ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">GIỚI THIỆU</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product">SẢN PHẨM</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">LIÊN HỆ</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </header>

        </div>
    )
}

export default Header
