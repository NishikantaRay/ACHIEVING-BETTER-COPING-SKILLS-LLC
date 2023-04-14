import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg  nav-css" style={{ backgroundColor: "#f0f0f0" }}>
                <div className="container">
                    <Link className="navbar-brand " to="/">
                        <img src="/assests/image/image 4.svg" alt="" width="30" height="24" className="navbar-logo d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="https://inofinityrnd.com/">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://inofinityrnd.com/">Contact Us</a>
                            </li>

                        </ul>
                        {/* <form className="d-flex" role="search">
                            <div class="btn-group mob-view ">
                                <a href="#" class="btn btn-primary-active active" aria-current="page">Verify</a>
                                <a href="#" class="btn btn-primary-inactive">Enroll</a>
                            </div>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
