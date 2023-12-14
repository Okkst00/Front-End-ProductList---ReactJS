import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import produk from '../data/Data produk.json'
import '../assets/css/products.css'
import Navbar from "../component/navbar"

const Product = () => {

    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')
    const [view, setView] = useState(false)


    return (
        <>
        <Navbar/>
        <div className="container topProduct">
            <div className="row pt-0 pb-4">
                <div className="col col-lg-3 col-md-11 col-12 mb-lg-0 mb-md-4 mb-4">
                    <div className="btnWrap text-start">
                        <button className="btn btn-light fw-medium rounded-5 px-5 pb-3 pt-3 mx-auto shadow" onClick={() => navigate("/")}><i className="bi bi-arrow-left"></i> Kembali</button>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-11 col-12 mx-auto">
                    <div className="input-group mb-3 text-center">
                        <input type="text" className="form-control border-0 py-3 px-4" placeholder="Filter Produk..." id="searchInput" onChange={(event) => {
                                setSearchTerm(event.target.value);
                            }} />
                        <span className="input-group-text bg-white border-0 px-4 py-3"><i className="bi bi-search"></i></span>
                    </div>
                </div>
                <div className="col col-lg-3 col-md-11 col-12">
                    <div className="btnWrap text-end">
                    {view === true ? (
                        <button className="btn btn-light" onClick={() => setView(false)}><i className="bi bi-list-ul"></i></button>
                    ) : (
                        <button className="btn btn-light" onClick={() => setView(true)}><i className="bi bi-grid-fill"></i></button>
                    )}
                    </div>
                </div>
            </div>
            {view === true ? (
                <div className="row justify-content-lg-start justify-content-md-start justify-content-start mt-4 mainContentList">
                    {
                        produk.data 
                        .filter((val) => {
                            if(searchTerm == ""){
                            return val;
                            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                            }
                        })
                        .map((val, u) => {
                            return(
                                <a href={val.product_url} className="text-decoration-none mb-2" target="_blank" key={u}>
                                    <div className="card shadow overflow-hidden px-2 py-2 rounded-4 h-100">
                                        <div className="wrapped d-flex align-items-center">
                                            <img className='imageProduct img-fluid rounded-4' src={val.primary_image.thumbnail} />
                                            <div className="desc ps-3">
                                                <div className="fw-medium name fw-bold">{val.name}</div>
                                                <div className='price mb-1'>{val.price.text_idr}</div>
                                                <div className="rate fw-bold mt-1">
                                                    <i className="bi bi-star-fill"></i> {val.stats.averageRating}
                                                </div>
                                                <div className="text-dark labels mt-1">
                                                    {val.label_groups.map((label, v) => {
                                                        return (
                                                            <span className="labels me-2 px-2 py-1 fw-medium rounded-2" key={v}>{label.title}</span>
                                                        )}
                                                    )}
                                                </div>
                                                <div className="text-dark badges mt-2">
                                                    {val.badge.map((badge, w) => {
                                                        return (
                                                            <div className="d-flex align-items-center" key={w}>
                                                                <img className='imageBadges img-fluid rounded-4 me-1' src={badge.image_url} />
                                                                <div className="title fw-medium">{badge.title}</div>
                                                            </div>
                                                        )}
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                    ) : (
                <div className="row justify-content-lg-start justify-content-md-start justify-content-start mt-4 mainContent">
                    {
                        produk.data 
                        .filter((val) => {
                            if(searchTerm == ""){
                            return val;
                            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                            }
                        })
                        .map((val, x) => {
                            return(
                                <a href={val.product_url} target="_blank" className="text-decoration-none mb-3" key={x}>
                                <div className="card shadow px-2 py-2 rounded-4 h-100">
                                <img className='imageProduct img-fluid rounded-4' src={val.primary_image.thumbnail} />
                                    <div className="text-decoration-none fw-bold name mt-3 mb-2" target="_blank">{val.name}</div>
                                    <div className="text-dark price fw-medium">
                                        {val.price.text_idr}
                                    </div>
                                    <div className="rate fw-bold mt-2">
                                        <i className="bi bi-star-fill"></i> {val.stats.averageRating}
                                    </div>
                                    <div className="text-dark labels mt-2">
                                        {val.label_groups.map((label, y) => {
                                            return (
                                                <div className="title px-2 py-1 rounded-3" key={y}>{label.title}</div>
                                            )}
                                        )}
                                    </div>
                                    <div className="text-dark badges mt-1">
                                        {val.badge.map((badge, z) => {
                                            return (
                                                <div className="d-flex align-items-center" key={z}>
                                                    <img className='imageBadges img-fluid rounded-4 me-1' src={badge.image_url} />
                                                    <div className="title fw-medium">{badge.title}</div>
                                                </div>
                                            )}
                                        )}
                                    </div>
                                </div>
                            </a>
                            )
                        })
                    }
                </div>
            )}
        </div>
        </>
    )
  }
  
  export default Product
  