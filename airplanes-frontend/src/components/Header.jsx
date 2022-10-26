import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className="header">
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>
    </header>
  )
}

export default Header