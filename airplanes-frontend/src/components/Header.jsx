import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className='link-styling'>
        <Link className="link-about" to="/About">About</Link>
        <Link className="link-home" to="/">Home</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header