import React, { createContext, useState } from 'react';
import useInitialState from '../utils/useInitialState';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState(useInitialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
        });
    };

    const removeFromCart = (payload, indexToRemove) => {
        setState({
            ...state,
            cart: state.cart.filter(
                (_item, indexCurrent) => indexCurrent !== indexToRemove
            ),
        });
    };

    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload],
        });
    };

    const addNewOrder = (payload) => {
        setState({
            ...state,
            orders: [...state.orders, payload],
        });
    };

    return (
        <AppContext.Provider
            value={{
                state,
                addToCart,
                removeFromCart,
                addToBuyer,
                addNewOrder,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
