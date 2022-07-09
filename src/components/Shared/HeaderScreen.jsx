import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import './styles/headerScreen.css'
import images from '../../assets/js/images'
import { useSelector } from 'react-redux'

const HeaderScreen = () => {

  const navbar = useRef()

  const clickMenuHam = () => {
    navbar.current.classList.toggle('navbar-open')
  }
  const cart = useSelector(state => state.cart)
  
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to='/'>
          <div className="header__img">
            <img src={images[0].img} alt={images[0].title} />
          </div>
        </Link>
      </h1>
      <div onClick={clickMenuHam} className="header__menuham">
        <i className="fa-solid fa-bars"></i>
      </div>
      <nav ref={navbar} className="navbar">
        <ul className="navbar__list">
          <li className="navbar__items">
            <NavLink 
                to='/purchases' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-store"></i>
              <p className="navbar__label">Purchases</p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/cart' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-cart-shopping"></i>
              <p className="navbar__label">Cart <span className={cart?.length === undefined || cart?.length === 0 ? 'display-none' : 'navbar__counter'}>{cart?.length < 0 || undefined ? '' : cart?.length}</span></p>
            </NavLink>
          </li>
          <li className="navbar__items">
            <NavLink 
                to='/login' 
                className={({isActive}) => isActive ? 'navbar__link-active navbar__links' : 'navbar__links'}>
              <i className="fa-solid fa-user"></i>
              <p className="navbar__label">Login</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderScreen;
