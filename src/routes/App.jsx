import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Page from '../containers/pages';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Page.Home} />
                <Route exact path="/checkout" component={Page.Checkout} />
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
        </BrowserRouter>
    );
};

export default App;
