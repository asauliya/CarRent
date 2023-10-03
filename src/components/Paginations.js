import React, { useContext, useState , useEffect} from 'react';
import CarContext from '../context/CarContext';
import { useParams } from 'react-router-dom';

const Pagination = () => {
    let { pageNumber } = useParams();
    pageNumber = parseInt(pageNumber)

    const pageNumbers = [];
    const context = useContext(CarContext)
    const { postsPerPage, totalPosts, paginate, setCurrentPage } = context;

    // code for variable pages depending on the total number of cars

    // for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //     pageNumbers.push(i);
    // }

    for (let i = 1; i <= 10; i++) { // fixed number of pges for pagination since asked in the assignment
        pageNumbers.push(i);
    }
    const [disable, setDisable] = useState("")
    const [disable2, setDisable2] = useState("")

    const handleClick = (number) => {
        setCurrentPage(number)
        paginate(number)
    }
    
    useEffect(() => {
        if(pageNumber === 1){
            setDisable("disabled")
        }
        else{
            setDisable("")
        }

        if(pageNumber >= 10){ 
            setDisable2("disabled")
        }
        else{
            setDisable2("")
        }
        // eslint-disable-next-line
    }, [pageNumber])
    

    return (
        <div className='container'>
            <ul className='pagination' style={{ justifyContent: "center" , margin:"15px"}}>
                <li className="page-item">
                    <span className={`page-link ${disable}`} onClick={() => handleClick(pageNumber-1)} style={{cursor:"pointer"}} aria-label="Previous">
                        <span  aria-hidden="true">&laquo;</span>
                    </span>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        {(number === pageNumber) &&
                            <span onClick={() => handleClick(number)} style={{cursor:"pointer"}} className='page-link active'>
                                {number}
                            </span>
                        }
                        {(number !== pageNumber) &&
                            <span onClick={() => handleClick(number)} style={{cursor:"pointer"}} className='page-link'>
                                {number}
                            </span>
                        }

                    </li>
                ))}
                <li className="page-item">
                    <span className={`page-link ${disable2}`} aria-label="Next" onClick={() => handleClick(pageNumber+1)} style={{cursor:"pointer"}}>
                        <span aria-hidden="true">&raquo;</span>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;