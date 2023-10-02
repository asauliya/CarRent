import { useState } from 'react';
import Navbar from './components/Navbar';
import Car from './components/car';
import data from './json/car.json'
import CarState from './context/CarState';

function App() {
  const [posts, setPosts] = useState(data);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <CarState>
    <div>
      <Navbar/>
      <Car 
        currentPage={currentPage}
        data={currentPosts} 
        loading={loading} 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
    </CarState>
  );
}

export default App;
