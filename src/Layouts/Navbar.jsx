import React from "react";
import Logo from "../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from '../Hooks/useAuth'
export default function Navbar() {
    const { user, logOut } = useAuth()
    const links = [
        { path: '/', name: 'Home' },
        { path: '/coverage', name: 'Coverage' },
        { path: '/about', name: 'About' }
    ];

    return (
        <div className="navbar shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                </div>

                <a className="btn btn-ghost text-xl btn-primary">
                    <Logo />
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {
                        links.map((link, inx) =>
                            <NavLink
                                key={inx}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-xl font-semibold ${isActive ? 'text-blue-800 font-bold' : 'text-black'}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        )
                    }
                </ul>
            </div>

            <div className="navbar-end">
                {
                    user ? <div className="flex items-center gap-4">
                        <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="user-img" />
                        <button onClick={logOut} className="btn btn-primary">Logout</button>
                    </div> : <Link to='/authLayout/login' className="btn bg-primary text-white text-xl font-semibold">Login</Link>
                }
            </div>
        </div>
    );
}
