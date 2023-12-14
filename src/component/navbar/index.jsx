import { useState } from 'react'
import './navbar.css'
import photo from '../../assets/images/user.jpg'

function Navbar() {

    const admin = [
        {   
            id: 1,
            image: photo,      
            name: "Mailskuy",
            email: "mail@app.com",
            gender: "Male"
        }
    ]

    const [isAdmin, setIsAdmin] = useState (admin)

  return (
    <>
     <nav className="navbar navbar-expand-lg py-3 fixed-top navbar-dark">
        <div className="container">
            <a className="navbar-brand text-white fw-bold" href="/">ProdList'</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto d-flex align-items-center">
                <li className="nav-item d-inline dropdown">
                {isAdmin.map((data) => {
                    return (
                    <a className="nav-link active mx-2 fw-semibold dropdown-toggle text-white" aria-current="page" href="#" data-bs-toggle="dropdown" aria-expanded="false" key={data.id}><img className='imgProfile rounded-circle images img-fluid' src={data.image} /> &nbsp; Hallo {data.name}</a>
                    )
                })}
                    <ul className="dropdown-menu rounded-4 overflow-hidden">
                      <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
                      <li><a className="dropdown-item" href="/account">Pengaturan Akun</a></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><a className="dropdown-item" href="/logout">Keluar <i className="bi bi-box-arrow-right"></i></a></li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar
