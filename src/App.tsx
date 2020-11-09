import React from 'react';
import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Premium from './containers/Premium/Premium';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={'/'}>
            <Home />
          </Route>
          <Route path={'/premium'}>
            <Premium />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
