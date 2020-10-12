import React, { FunctionComponent, useState } from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import { MainNavigationValues } from '../../constants/MainNavigationValues';

const Home: FunctionComponent = () => {
  const [isHamburgerOpen, changeHamburgerState] = useState<boolean>(false);
  const changeHamburgerStateHandler = (): void => {
    changeHamburgerState(!isHamburgerOpen);
  };
  return (
    <>
      <HomeNavigation
        changeHamburgerState={() => changeHamburgerStateHandler()}
      />
      <HamburgerMenu
        mainData={MainNavigationValues}
        isHamburgerOpen={isHamburgerOpen}
      />
    </>
  );
};

export default Home;
