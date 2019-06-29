import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BaseLayout from 'layout/containers/BaseLayout';
import SearchView from 'views/containers/SearchView';

/**
 * All the routes for the application.
 * 
 * These are composed of three parts:
 * - Path
 * - Class name to mark links as active
 * - Component to show
 */
export default <Switch component={BaseLayout}>
   <Route path='/' exact component={SearchView}/>
</Switch>;
