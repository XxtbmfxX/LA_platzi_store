import React, { useContext } from 'react';

import Header from './Header';
import Footer from './Footer';

import '../styles/components/Layout.css';
import { AppContext } from '../context/AppContext';

const Layout = ({ children }) => {
    const { Themestyles, darkmode } = useContext(AppContext);

    let layoutTheme;

    darkmode
        ? (layoutTheme = Themestyles.dark)
        : (layoutTheme = Themestyles.light);

    return (
        <div className="Main" style={layoutTheme}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
