import React, { useState} from 'react'
import CarContext from './CarContext'
import data from '../json/car.json';
import { useNavigate } from 'react-router-dom';

function CarState(props) {
	const navigate = useNavigate();

	const [posts, setPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	const totalPosts = posts.length;
	// search
	const search = (keyword) =>{
		setPosts(data.filter((item) => item.model.includes(keyword)));
	}
  // Change page
  const paginate = (number) => {
		navigate(`page/${number}`)
	}
  return (
    <CarContext.Provider value={{data , paginate, currentPage, postsPerPage, currentPosts, search, totalPosts, setCurrentPage}}>
      {props.children}
    </CarContext.Provider>
  )
}

export default CarState