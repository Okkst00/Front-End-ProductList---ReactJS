import React, { useState } from "react";
import './productTopMin.css'
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";

import produk2 from '../../data/Data produk.json'



function TopPlusProduct() {

    const sortedData2 = produk2.data.sort((a,b) => a.stock - b.stock)
    const sortedDataT = produk2.data.sort((a,b) => a.stock - b.stock)
    const [views, setViews] = useState(false)

    const [perPage, setPerPage] = useState(10); 
    const [currentPage, setCurrentPage] = useState(1);
    const [filterText, setFilterText] = useState('');

    const handlePerPageChange = (e) => {
        const value = e.target.value;
        setPerPage(value === 'all' ? sortedDataT.length : parseInt(value, 10));
        setCurrentPage(1); 
      };
    
      const handleFilterChange = (e) => {
        setFilterText(e.target.value);
        setCurrentPage(1); 
      };
    
      const filteredProducts = sortedDataT.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      );
    

    const totalPages = Math.ceil(filteredProducts.length / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = perPage === 'all' ? filteredProducts.length : startIndex + perPage;
    const currentProducts = perPage === 'all' ? filteredProducts : filteredProducts.slice(startIndex, endIndex);


    return (
        <div className="container my-5">
            <div className="row pt-5">
                <div className="col col-lg-9">
                    <h3 className="text-white mb-4">Produk Stok Rendah</h3>
                </div>
                <div className="col col-lg-3 text-end">
                    {views === true ? (
                        <button className="btn btn-light" onClick={() => setViews(false)}><i className="bi bi-graph-up"></i></button>
                    ) : (
                        <button className="btn btn-light" onClick={() => setViews(true)}><i className="bi bi-table"></i></button>                        
                    )}
                </div>
            </div>
            {views === true ? (
                <div className="row justify-content-center chartDiagram pb-4">
                    <div className="col text-center">
                        <BarChart
                            width={1100}
                            height={350}
                            data={sortedData2}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 30,
                                bottom: 5,
                            }}
                            barSize={20}
                        >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 0, right: 0 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="8 8" />
                        <Bar dataKey="stock" fill="#8884d8" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
                </div>
             ) : (
                <div className="row justify-content-center mt-3 pb-4 tableContent2">
                    <div className="row">
                        <div className="input-group mb-3 text-center">
                            <input  type="text" className="form-control"
                            id="filter"
                            value={filterText}
                            onChange={handleFilterChange}
                            placeholder="Cari produk..."
                            />
                            <span className="input-group-text bg-white border-0 px-4 py-3"><i className="bi bi-search"></i></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tblwrap">
                            <table className="table table-striped rounded-3 overflow-hidden shadow">
                                <thead>
                                    <tr>
                                        <th className="number" scope="col">#</th>
                                        <th className="images" scope="col">Gambar</th>
                                        <th className="name" scope="col">Nama</th>
                                        <th className="prices" scope="col">Harga</th>
                                        <th className="stock" scope="col">Stok</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    { currentProducts.map((val, d) => {
                                        return (
                                            <tr key={d}>
                                                <th scope="row">{startIndex+d+1}</th>
                                                <td><img className='imageProduct img-fluid rounded-3' src={val.primary_image.thumbnail} /></td>
                                                <td>{val.name}</td>
                                                <td>{val.price.text_idr}</td>
                                                <td>{val.stock}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                       
                        <div className="row btnWrap mt-4 d-flex align-items-center">
                            <div className="col col-lg-2 col-md-4 col-3">
                                <button className="btn btn-light rounded-5 px-4 py-2"
                                    onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
                                    disabled={currentPage === 1}
                                    >
                                    <i className="bi bi-chevron-left"></i> 
                                </button>
                            </div>
                            <div className="col col-lg-2 col-md-4 col-6 text-center">
                                <span className="text-center text-white">{`Halaman ${currentPage} dari ${totalPages}`}</span>
                            </div>
                            <div className="col col-lg-2 col-md-4 col-3 text-end">
                                <button className="btn btn-light rounded-5 px-4 py-2"
                                    onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    >
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-6 mt-lg-0 mt-md-4 mt-4 mb-6 ms-auto text-lg-end">
                                <span className="text-white text-end">Total Data: {filteredProducts.length}</span>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-6 mt-lg-0 mt-md-4 mt-4 mb-6 ms-auto">
                                <select id="perPage" className="form-select" onChange={handlePerPageChange} value={perPage}>
                                    <option value="all">Semua</option>
                                    <option value="10">10 Ditampilkan</option>
                                    <option value="20">20 Ditampilkan</option>
                                    <option value="30">30 Ditampilkan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
  }
  
  export default TopPlusProduct
  