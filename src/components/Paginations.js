import React, { useContext } from 'react';
import CarContext from '../context/CarContext';

const Pagination = () => {
    const pageNumbers = [];
    const context = useContext(CarContext)
    const { currentPage, postsPerPage, totalPosts, paginate, setCurrentPage } = context;

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
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
                        {(number === currentPage)&&
                            <a onClick={() => handleClick(number)} className='page-link active'>
                                {number}
                            </a>
                        }
                        {(number !== currentPage)&&
                            <a onClick={() => handleClick(number)} className='page-link'>
                                {number}
                            </a>
                        }
                        
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;