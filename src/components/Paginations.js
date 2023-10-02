import React from 'react';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='container'>
            <ul className='pagination' style={{ justifyContent: "center" }}>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        {(number === currentPage)&&
                            <a onClick={() => paginate(number)} href='!#' className='page-link active'>
                                {number}
                            </a>
                        }
                        {(number !== currentPage)&&
                            <a onClick={() => paginate(number)} href='!#' className='page-link'>
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