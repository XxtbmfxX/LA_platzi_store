import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../context/AppContext';

import '../styles/components/Header.css';

const Header = () => {
    const {
        state: { cart },
    } = useContext(AppContext);
    return (
        <div className="Header">
            <Link to="/">
                <h1 className="Header-title">Platzi merch</h1>
            </Link>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket  "></i>
                    {cart.length > 0 && (
                        <div className="Header-alert"> {cart.length} </div>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Header;
