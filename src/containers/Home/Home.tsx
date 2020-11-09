import React, { FunctionComponent, useState } from 'react';
import HomeNavigation from '../../components/HomeNavigation/HomeNavigation';
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu';
import { MainNavigationValues } from '../../constants/MainNavigationValues';
import Cookies from 'js-cookie';
import { setTokenAction } from '../../store/Authentication/actions';
import { useDispatch, useSelector } from 'react-redux';
import signInUser from '../../store/Authentication/operations';
import getSingleTrack from '../../store/Tracks/operations';

const Home: FunctionComponent = () => {
  const dispatch = useDispatch();

  const [isHamburgerOpen, changeHamburgerState] = useState<boolean>(false);
  const changeHamburgerStateHandler = (): void => {
    changeHamburgerState(!isHamburgerOpen);
  };

  const token = Cookies.get('spotifyAuthToken');
  if (token) dispatch(setTokenAction(token));
  dispatch(signInUser());

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
