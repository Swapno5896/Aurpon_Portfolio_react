import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './compoonents/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>

    </div>
  );
}

export default App;