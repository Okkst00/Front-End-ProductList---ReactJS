import React from "react";
import './footer.css'

function Footer() {

    return (
        <div className="footer mb-0 pt-4 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-md-6 col-6">
                        <p className="text-white"><i className="bi bi-c-circle"></i> Prodlist 2023</p>
                    </div>
                    <div className="col col-lg-6 col-md-6 col-6 text-end location">
                        <a href="/location" className=" text-end text-decoration-none"><i className="bi bi-geo-alt-fill"></i> Malang, Indonesia</a>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default Footer
  