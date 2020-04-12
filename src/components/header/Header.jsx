import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiShoppingBag } from 'react-icons/fi'
import './header.css'

const Header = () => {
  const cartSize = useSelector(state => state.cart.length)
  return (
    <header className='header'>
      <Link to='/' className='logo'>
        <img src="./images/logo.png" alt="logo" className='logo-icon' />
        <span className='logo-text'> Redux Books</span>
      </Link>
      <Link to="/cart" className="header-cart">
        <div>
          <strong>Sacola</strong>
          <span>
            <strong>{cartSize}</strong> livros
         </span>
        </div>
        <FiShoppingBag size={36} color="#FFF" />
      </Link>
    </header>
  )
}

export default Header