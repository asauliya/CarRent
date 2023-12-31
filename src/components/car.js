import React, { useContext , useEffect} from 'react'
import CarsItem from './carsItem';
import Pagination from './Paginations';
import CarContext from '../context/CarContext';
import { useNavigate, useParams } from 'react-router-dom';

function Car() {
    const context = useContext(CarContext);
    const navigate = useNavigate();
    const {currentPosts, setCurrentPage} = context;
    const { pageNumber } = useParams();

    useEffect(() => {
      setCurrentPage(pageNumber)
      // eslint-disable-next-line 
    }, [navigate])
    
    return (
        <>
            <div className="container">
            {(currentPosts.length == 0) && <h3>Nothing to Show</h3>}
                <div className="row row-cols-2 row-cols-lg-3 g-lg-3">
                    {currentPosts.map(item => {
                        return (
                            <div className="col p-3 d-flex justify-content-evenly m-0" key={item.model}>
                                <CarsItem data={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Pagination/>
        </>
    )

}

export default Car