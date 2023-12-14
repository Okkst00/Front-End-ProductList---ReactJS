import React, { useState } from "react"
import produk from '../../data/Data produk.json'
import './product.css'

function Product() {

    
    const [view, setView] = useState(false)
    const sortedData = produk.data.sort((a,b) => a.stock - b.stock)
    const sortedDatas = produk.data.sort((a,b) => a.stock - b.stock)
    // console.log(product);

    return (
        <div className="container topProduct my-5">
            <div className="row pt-4">
                <div className="col col-lg-9">
                    <h3 className="text-white">Produk</h3>
                </div>
                <div className="col col-lg-3 text-end">
                    {view === true ? (
                        <button className="btn btn-light" onClick={() => setView(false)}><i className="bi bi-list-ul"></i></button>
                    ) : (
                        <button className="btn btn-light" onClick={() => setView(true)}><i className="bi bi-grid-fill"></i></button>
                    )}
                </div>
            </div>
            {view === true ? (
                <div className="row justify-content-lg-start justify-content-md-center justify-content-center mt-4 mainContentList">
                {sortedData.slice(0,5).map((dataList, x) => {
                    return (
                    <a href={dataList.product_url} className="text-decoration-none mb-2" target="_blank" key={x}>
                        <div className="card shadow overflow-hidden px-2 py-2 rounded-4 h-100">
                            <div className="wrapped d-flex align-items-center">
                                <img className='imageProduct img-fluid rounded-4' src={dataList.primary_image.thumbnail} />
                                <div className="desc ps-3">
                                    <div className="fw-medium name fw-bold">{dataList.name}</div>
                                    <div className='price mb-1'>{dataList.price.text_idr}</div>
                                    <div className="rate fw-bold mt-1">
                                        <i className="bi bi-star-fill"></i> {dataList.stats.averageRating}
                                    </div>
                                    <div className="text-dark labels mt-1">
                                        {dataList.label_groups.map((label, w) => {
                                            return (
                                                <span className="labels me-2 px-2 py-1 fw-medium rounded-2" key={w}>{label.title}</span>
                                            )}
                                        )}
                                    </div>
                                    <div className="text-dark badges mt-2">
                                        {dataList.badge.map((badge, v) => {
                                            return (
                                                <div className="d-flex align-items-center" key={v}>
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
                    })}
                </div>
            ) : (
                <div className="row justify-content-lg-start justify-content-md-start justify-content-start mt-4 mainContent">
                {sortedDatas.slice(0,5).map((dataGrid, u) => {
                    return (
                            <a href={dataGrid.product_url} target="_blank" className="text-decoration-none mb-3" key={u}>
                                <div className="card shadow px-2 py-2 rounded-4 h-100">
                                <img className='imageProduct img-fluid rounded-4' src={dataGrid.primary_image.thumbnail} />
                                    <div className="text-decoration-none fw-bold name mt-3 mb-2" target="_blank">{dataGrid.name}</div>
                                    <div className="text-dark price fw-medium">
                                        {dataGrid.price.text_idr}
                                    </div>
                                    <div className="rate fw-bold mt-2">
                                        <i className="bi bi-star-fill"></i> {dataGrid.stats.averageRating}
                                    </div>
                                    <div className="text-dark labels mt-2">
                                        {dataGrid.label_groups.map((label, u) => {
                                            return (
                                                <div className="title px-2 py-1 rounded-3" key={u}>{label.title}</div>
                                            )}
                                        )}
                                    </div>
                                    <div className="text-dark badges mt-1">
                                        {dataGrid.badge.map((badge, t) => {
                                            return (
                                                <div className="d-flex align-items-center" key={t}>
                                                    <img className='imageBadges img-fluid rounded-4 me-1' src={badge.image_url} />
                                                    <div className="title fw-medium">{badge.title}</div>
                                                </div>
                                            )}
                                        )}
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            )}
            <div className="btnWrap text-center">
                <a href="/products" className="btn btn-light rounded-5 fw-bold px-4 py-2 mt-4 mb-5">Lihat Semua Produk &nbsp;<i className="bi bi-arrow-right"></i></a>
            </div>
        </div>
    )
  }
  
  export default Product
  