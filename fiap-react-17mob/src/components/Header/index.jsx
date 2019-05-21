import React from 'react';
import logo from '../../assets/logo.png';
import './style.css';

const Header = () => (
    <header className="header">
        <div className="mdl-grid">
            <div className="mdl-cell--N-col-">
                <img
                    alt="Logo"
                    src={logo}
                    className="header__logo" />
            </div>
            <div class="demo-layout-transparent mdl-layout mdl-js-layout">
    <div class="mdl-layout__header-row">

      <span class="mdl-layout-title">Title</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
  
        </div>
    </header>

);

export default Header;