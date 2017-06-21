import React, { PropTypes, Component } from 'react';
import { useRouterHistory, Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

import HomeContainer from './containers/home';
import Home from './components/home';
import About from './components/about';
import Table from './components/table';

const Root = React.createClass({
  render() {
    return (
      <Router history = {history}>
        <Route name='home' path='/' component={HomeContainer}>
          <IndexRoute component={Home} />
          <Route name="about" path='/about' component={About} />
          <Route name="table" path='/table' component={Table} />
        </Route>
      </Router>
    );
  },
});

export default Root;
