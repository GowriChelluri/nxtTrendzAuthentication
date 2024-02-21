import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <ul className="list-items-container">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/products">
        <li>Products</li>
      </Link>
      <Link to="/cart">
        <li>Cart</li>
      </Link>
      <li>
        <button type="submit" className="btn">
          Logout
        </button>
      </li>
    </ul>
  </nav>
)

export default Header
