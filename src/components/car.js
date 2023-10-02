import React, { useContext } from 'react'
import CarsItem from './carsItem';
import Pagination from './Paginations';
// import CarState from '../context/CarState';

function Car(props) {
    // const context = useContext(CarState)
    // const {posts} = context;
    const data = props.data;
    return (
        <>
            <div className="container text-center">
                <div className="row row-cols-2 row-cols-lg-3 g-lg-3">
                    {data.map(item => {
                        return (
                            <div className="col p-3" key={item.model}>
                                <CarsItem data={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Pagination
                currentPage={props.currentPage}
                postsPerPage={props.postsPerPage}
                totalPosts={props.totalPosts}
                paginate={props.paginate}
            />
        </>
    )

}

export default Car