import React, { Component } from 'react';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import App from "./App";
import CreateMeso from "./CreateMeso";
import SelectMeso from "./SelectMeso";
import notFound from "./notFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />

            <Route path="/create-meso" component={CreateMeso} />

            <Route path="/select-meso" component={SelectMeso} />

            <Route component={notFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;