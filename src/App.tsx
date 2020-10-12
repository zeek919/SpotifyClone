import React, { useState } from 'react';
import HomeNavigation from './components/HomeNavigation/HomeNavigation';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import GlobalStyle from './GlobalStyle';
import { MainNavigationValues } from './constants/MainNavigationValues';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HamburgerButton from './components/HamburgerButton/HamburgerButton';

const App = () => {
  const [isHamburgerOpen, changeHamburgerState] = useState<boolean>(false);

  const changeHamburgerStateHandler = (): void => {
    changeHamburgerState(!isHamburgerOpen);
  };

  return (
    <>
      <GlobalStyle />
      <HomeNavigation
        changeHamburgerState={() => changeHamburgerStateHandler()}
      />
      <HamburgerMenu
        mainData={MainNavigationValues}
        isHamburgerOpen={isHamburgerOpen}
      />
      <Router>
        <Switch>
          <Route path={'/premium'}>
            <HamburgerButton onClick={() => 'asd'} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
