import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
      <div className="App">
        <Navbar />
        <Outlet />
        <p className="signature">by <a href="https://www.linkedin.com/in/karl-web/" target="_blank">Karl Neuman</a></p>
      </div>
    </>
  )
}

export default App
