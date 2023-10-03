import React, { useContext, useState } from 'react'
import CarContext from '../context/CarContext';

function Navbar() {
    const context = useContext(CarContext);
    const { search } = context;
    const [keyword, setKeyword] = useState("")

    const handleClick = () => {
        search(keyword)
    }
    return (

        <nav className="navbar navbar-expand-lg shadow fixed-top" style={{background:"#f2f6fc"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">RentCars</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="/page/1">Models</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" placeholder="Search Models" aria-label="Search" onChange={(e) => { setKeyword(e.target.value) }} />
                        <span className="btn btn-success" onClick={handleClick}>Search</span>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar