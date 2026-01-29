import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Style from '../Header/Header.module.css'
export default function Header({ cartCount }){
    return (
    <nav className="navbar navbar-expand-lg">

  <div className="container-fluid">
    <img src={require('../img/logo-removebg-preview.png')} className={Style.img} alt='logo'/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${Style.ulList}`}>
        <li className="nav-item">
          <Link className={`nav-link active ${Style.linkcolor}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className={`nav-item dropdown ${Style.listShop}`}>
        <Link className={`nav-link dropdown-toggle  ${Style.linkcolor}`} to="#" role="button">
            Shop
        </Link>
        <ul className={`dropdown-menu ${Style.shopmenu}`}>
            <li><Link className="dropdown-item" to="dress">Dress</Link></li>
            <li><Link className="dropdown-item" to="shirt">Shirt</Link></li>
            <li><Link className="dropdown-item" to="allproduct">All Product</Link></li>
        </ul>
        </li>
          <li className="nav-item">
          <Link className={`nav-link ${Style.linkcolor}`} to="about">About</Link>
        </li>
           <li className="nav-item">
          <Link className={`nav-link ${Style.linkcolor}`} to="signup">Sign up</Link>
        </li>
      </ul>
     <div className={Style.shopCart}>
      <Link to="/cart">
        <i className={`fa-solid fa-cart-shopping ${Style.cart}`}>
          <span>{cartCount}</span>
        </i>
      </Link>
    </div>
    </div>
  </div>

</nav>

    );
}
