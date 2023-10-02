import React, { useContext } from 'react';
import CarContext from '../context/CarContext';
import { useParams } from 'react-router-dom';

const Pagination = () => {
    let {pageNumber} = useParams();
    const pageNumbers = [];
    const context = useContext(CarContext)
    const { postsPerPage, totalPosts, paginate, setCurrentPage } = context;

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            // console.log(i)
        pageNumbers.push(i);
    }
    const handleClick = (number) =>{
        setCurrentPage(number)
        paginate(number)
    }
    return (
        <nav className='container'>
            <ul className='pagination' style={{ justifyContent: "center" }}>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        {(number === parseInt(pageNumber))&&
                            <span onClick={() => handleClick(number)} className='page-link active'>
                                {number}
                            </span>
                        }
                        {(number !==  parseInt(pageNumber))&&
                            <span onClick={() => handleClick(number)} className='page-link'>
                                {number}
                            </span>
                        }
                        
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;