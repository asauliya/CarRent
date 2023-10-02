import React, { useState} from 'react'
import CarContext from './CarContext'
import data from '../json/car.json';
// import { useNavigate } from 'react-router-dom';

function CarState(props) {
	// const navigate = useNavigate();

	const [posts, setPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [indexOfLastPost] = useState(currentPage * postsPerPage);
  const [indexOfFirstPost] = useState(indexOfLastPost - postsPerPage);
	const [currentPosts] = useState(posts.slice(indexOfFirstPost, indexOfLastPost))

	// search
	const search = (keyword) =>{
		setPosts(data.filter((item) => item.model.includes(keyword)));
	}
  // Change page
  const paginate = (pageNumber) => {
		// navigate(`page/${pageNumber}`)
	}
  return (
    <CarContext.Provider value={{data , paginate, currentPage, posts, postsPerPage, currentPosts, search}}>
      {props.children}
    </CarContext.Provider>
  )
}

export default CarState