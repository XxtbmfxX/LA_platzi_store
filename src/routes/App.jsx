import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Page from '../containers/pages';
import Layout from '../components/Layout';

import '../styles/components/App.css';

import { AppProvider } from '../context/AppContext.js';

const App = () => {
    return (
        <AppProvider>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Page.Home} />
                        <Route
                            exact
                            path="/checkout"
                            component={Page.Checkout}
                        />
                        <Route
                            exact
                            path="/checkout/information"
                            component={Page.Information}
                        />
                        <Route
                            exact
                            path="/checkout/payment"
                            component={Page.Payment}
                        />
                        <Route
                            exact
                            path="/checkout/success"
                            component={Page.Success}
                        />
                        <Route component={Page.NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppProvider>
    );
};

export default App;
