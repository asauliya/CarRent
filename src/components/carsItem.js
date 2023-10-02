import React from 'react'
import image  from '../images/auto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGaugeHigh, faGear , faUsers, faGasPump} from '@fortawesome/free-solid-svg-icons'

function CarsItem(props) {
  const padding = {
    paddingTop:"5px",
    paddingBottom:"5px",
  }
    const data = props.data;
  return (
    <div className="card" style={{width: "22rem"}}>
        <img src={image} alt="..." style={{padding:"0.5rem", borderRadius:"12px"}}/>
        <div className="card-body" style={{paddingTop:"0"}}>
            <div className="container p-0">
                <div className="row">
                    <div className="col-8 text-start"><h5>{data.model}</h5></div>
                    <div className="col-4 text-end"><h6 className="text-body-secondary">{data.launch_year}</h6></div>
                </div>
            </div>
            <div className="container p-0">
                <div className="row row-cols-2">
                    <div className="col text-start" style={padding}><FontAwesomeIcon icon={faGaugeHigh}/> {data.mileage_city+"km/L"}</div>
                    <div className="col text-start" style={padding}><FontAwesomeIcon icon={faGasPump} /> {data.fuel_type}</div>
                    <div className="col text-start" style={padding}><FontAwesomeIcon icon={faUsers}/> {data.seats}</div>
                    <div className="col text-start" style={padding}><FontAwesomeIcon icon={faGear}/> {data.transmission_type} </div>
                </div>
            </div>
            <hr/>
            <div className="container p-0">
                <div className="row row-cols-2">
                    <div className="col">
                        <h5 >{data.rental_price}₹/<span style={{fontSize:"15px"}}>month</span></h5>
                    </div>
                    <div className="col text-end">
                        <a href="/" className="btn btn-primary btn-sm">Rent Now</a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CarsItem