import React from 'react';

import Products from '../components/Products';

import InitialState from '../utils/initialState';

const Home = () => {
    return (
        <div>
            <Products products={InitialState.products}>Hola home</Products>
        </div>
    );
};

export default Home;
