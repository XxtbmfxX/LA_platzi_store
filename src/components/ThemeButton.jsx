import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ThemeButton = () => {
    const { darkmode, setDarkmode } = useContext(AppContext);

    const handleClick = () => {
        setDarkmode(!darkmode);
    };

    const buttonStyle = {
        width: '40px',
        height: '40px',
        marginTop: '20px',
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>
            {' '}
            {darkmode ? ' 🌞 ' : ' 🌛 '}{' '}
        </button>
    );
};

export default ThemeButton;
