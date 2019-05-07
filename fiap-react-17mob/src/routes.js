import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Produto from './pages/Produtos';


const Routes = () => (
<Switch>
    <Route
        exact
        path='/'
        component={Search}
        />
    <Route
       exact
       path='/produto/:id'
       component={Produto}
       /> 
    <Route 
       component={() => (
           <div>Page not found</div>
       )} />  
</Switch>

);


export default Routes;