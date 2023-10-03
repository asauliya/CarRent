import Navbar from './components/Navbar';
import Car from './components/car';
import CarState from './context/CarState';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'

function App() {

  return (
    <CarState>
        <Navbar />
      <div style={{marginTop:"10vh"}}>
        <Routes >
          <Route index element={<Home/>} />
          <Route exact path="page/:pageNumber" element={<Car />} />
        </Routes>
      </div>
    </CarState>
  );
}

export default App;
