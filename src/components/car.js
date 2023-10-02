import React, { useContext } from 'react'
import CarsItem from './carsItem';
import Pagination from './Paginations';
import CarContext from '../context/CarContext';

function Car() {
    const context = useContext(CarContext)
    const {currentPosts} = context;
    // console.log(currentPosts);
    return (
        <>
            <div className="container text-center">
                <div className="row row-cols-2 row-cols-lg-3 g-lg-3">
                    {currentPosts.map(item => {
                        return (
                            <div className="col p-3" key={item.model}>
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