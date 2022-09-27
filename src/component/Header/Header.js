import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='header-menu'>
                <a href="/order">Order</a>
                <a href="/orderReview">order Review</a>
                <a href="/manageInventory">Manage Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;