import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './compoonents/Navbar/Navbar';
import Blogs from './pages/Blogs/Blogs';
import { Route, Routes } from 'react-router-dom';
import NotFoound from './pages/NotFoound/NotFoound';
import About from './pages/About/About';
import Videos from './pages/Videos/Videos';
import Footer from './compoonents/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/blog/:blogId' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/videos' element={<Videos></Videos>} />
        <Route path='*' element={<NotFoound></NotFoound>} />
      </Routes>
      <Footer></Footer>


    </div>
  );
}

export default App;
