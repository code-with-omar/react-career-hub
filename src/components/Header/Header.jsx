import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <header className='bg-linear-white'>
      <nav className='container header-nav'>
        <div className="brand-name fw-800 fs-32 font-dark-1">
          CareerHub
        </div>
        <div className='header-links'>
          <Link to='/home' className='font-dark-03 fs-16 fw-500'>Home</Link>
          <Link to='/apply' className='font-dark-03 fs-16 fw-500'>Applied Job</Link>
          <Link to='/blog' className='font-dark-03 fs-16 fw-500'>Blog</Link>
        </div>
        <div className='header-btn'>
          <button className='primary-btn'><Link>Star Applying</Link></button>
        </div>
      </nav>
    </header>
  );
};

export default Header;