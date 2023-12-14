import React from "react"
import '../assets/css/notFound.css'
import { useNavigate } from "react-router-dom"
import photo from '../assets/images/void.svg'

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className="container mt-5">
            <div className="row pt-5">
                <div className="col">
                    <img className='notFoundImages img-fluid d-grid mx-auto' src={photo} />
                    <h1 className="text-center mt-5 fw-bold text-white">Ups, Halaman Tidak ada</h1>
                    <div className="btnWrap text-center">
                        <button className="btn btn-light fw-medium rounded-5 px-5 pb-3 pt-3 mx-auto mt-4 shadow" onClick={() => navigate(-1)}><i class="bi bi-arrow-left"></i> Kembali Kuy</button>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default NotFound
  