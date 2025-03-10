import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <h1 className='page-title'>Welcome to React Router!</h1>
      <nav>
        <Link className='nav-link' to={"/"}>Home</Link>
        <Link className='nav-link' to={"/about"}>About</Link>
        <Link className='nav-link' to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
