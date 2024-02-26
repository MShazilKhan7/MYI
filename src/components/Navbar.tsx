import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar:React.FC = () =>
{
    return (
                <div className="navbar">
                    <div className="container-fluid">
                        <div className="col-lg-8">
                            <Link to="/">
                                <img className="logo" src={logo} alt="logo"/>
                            </Link>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center">
                            <Link className="menu-link" to="/signup">
                                Sign Up
                            </Link>
                            <Link className="menu-link" to="/login">
                                Login
                            </Link>
                            <Link className="menu-link" to="/account">
                                Account
                            </Link>
                        </div>
                    </div>
                </div>
           );
}

export default Navbar;