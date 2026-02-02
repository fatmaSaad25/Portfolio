import React from 'react';
import StyleHeader from '../Header/Header.module.css'
const Header = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img className="navbar-brand" src={require('../img/logo.png')} alt="logo" width={80}/>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link ${StyleHeader.linkColor}`} href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${StyleHeader.linkColor}`} href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${StyleHeader.linkColor}`} href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${StyleHeader.linkColor}`} href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${StyleHeader.linkColor}`} href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>   
     </div>
  );
}

export default Header;
