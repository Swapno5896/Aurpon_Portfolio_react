import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './compoonents/Navbar/Navbar';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Blogs></Blogs>
      {/* <Home></Home> */}

    </div>
  );
}

export default App;
