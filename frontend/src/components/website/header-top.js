import React, { useEffect, useState } from 'react'
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom'
import { signOut, isAuthenticated } from '../../auth'

const HeaderTop = () => {
    const history = useHistory();
    const { pathname } = useLocation(); // đường link định nghĩa trong file Routes.js
    const [isLogged, setIsLogged] = useState(false);
    const { user } = isAuthenticated();

    useEffect(() => {
        isAuthenticated() && setIsLogged(true);
    }, [pathname, isLogged])

    return (
        <div>
            <section className="header-top">
                <div className="header-top-container">
                    <ul className="header-top-container-left">
                        <li className="header-top-left-li">
                            <i className="fas fa-phone-alt" /><span>Hotline: 0336 xx xx 25</span>
                        </li>
                    </ul>
                    <ul className="header-top-container-right">
                        {pathname !== "/signin" && isLogged ? (
                            <>
                                <li className="header-top-right-li">
                                    <span style={{ color: "white" }}>Hello</span>
                                    <Link to="" style={{ cursor: 'pointer' }}
                                        onClick={() => signOut(() => {
                                            setIsLogged(false);
                                            history.push('/');
                                        })}>
                                        <i className="fas fa-user-plus" />Đăng suất </Link>
                                </li>
                                <li className="header-top-right-li">
                                    <NavLink to={user.role === 1 ? "/admin/dashboard" : "/user/dashboard"} > <i className="fas fa-user-plus" />Dashboard</NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="header-top-right-li">
                                    <NavLink to="/signup"> <i className="fas fa-user-plus" />Đăng ký </NavLink>
                                </li>
                                <li className="header-top-right-li">
                                    <NavLink to="/signin"> <i className="fas fa-sign-in-alt" />Đăng nhập </NavLink>
                                </li>
                            </>
                        )
                        }
                        <li className="header-top-right-li">
                            <NavLink to="#"> <i className="fas fa-shopping-cart" />Giỏ hàng </NavLink>
                        </li>
                        <li className="header-top-right-li">
                            <NavLink to="#"> <i className="fas fa-edit" />Kiểm tra đơn hàng </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
        </div >
    )
}

export default HeaderTop
