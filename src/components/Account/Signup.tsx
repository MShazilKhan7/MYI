import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import form from "../../images/form-bg.png"
import { Link } from "react-router-dom";

const Signup:React.FC = () =>
{
    return (
                <div className="signup h-100">
                    <div className="container-flex d-flex justify-content-center align-items-center h-100">
                        <div className="container-flex form-container d-flex justify-content-center align-items-center w-100 h-100 py-4" style={{backgroundImage:`url(${form})`}}>
                            <form className="signup-form">
                                <div className="col-lg-10 my-4">
                                    <h1 className="text-center">Signup Form</h1>
                                </div>
                                <div className="col-lg-10 my-4">
                                    <input type="text" placeholder="Username"/>
                                </div>
                                <div className="col-lg-10 py-4">
                                    <input type="email" placeholder="Email"/>
                                </div>
                                <div className="col-lg-10 py-4">
                                    <input type="password" placeholder="Password"/>
                                </div>
                                <div className="col-lg-10 py-4">
                                    <input type="text" placeholder="University"/>
                                </div>
                                <div className="col-lg-10 py-4">
                                    <input type="number" placeholder="Year"/>
                                </div>
                                <div className="col-lg-10 py-2">
                                    <button className="btn btn-secondary">Submit</button>
                                </div>
                                <div className="social-icons col-lg-10 py-4 mt-5 d-flex justify-content-center">
                                    <Link to="#">
                                        <FontAwesomeIcon  className="social-icon fb mx-4" icon={['fab', 'facebook']}/>
                                    </Link>
                                    <Link to="#">
                                        <FontAwesomeIcon  className="social-icon insta mx-4" icon={faInstagram}/>
                                    </Link>
                                    <Link to="#">
                                        <FontAwesomeIcon  className="social-icon goog mx-4" icon={faGoogle}/>
                                    </Link>
                                </div>
                                <div className="col-lg-10 py-2">
                                    <p>Already have an account? <Link to="/login">Login here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
           );
} 

export default Signup