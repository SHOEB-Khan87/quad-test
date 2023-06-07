import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <div className='fluid-container' style={{ marginBottom: "100px" }}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
          <div className="container-fluid" >
            <Link to="/" className="navbar-brand ms-5" href="#">Movies</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white" >Home</Link>
                </li>



              </ul>

            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
