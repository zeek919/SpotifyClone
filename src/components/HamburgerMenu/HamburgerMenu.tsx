import React, { FunctionComponent, useEffect } from 'react';
import { NavigationValuesTypes } from '../../constants/NavigationHeaderTypes';
import { Menu, Wrapper, Link, Line, SpotifyAuthWrapper } from './Styled';
import { useHistory } from 'react-router-dom';
import { SpotifyAuth } from 'react-spotify-auth';
import { useDispatch } from 'react-redux';
import getSingleTrack from '../../store/Tracks/operations';

interface IHomeNavigation {
  mainData: NavigationValuesTypes;
  isHamburgerOpen: boolean;
}

const HamburgerMenu: FunctionComponent<IHomeNavigation> = ({
  mainData,
  isHamburgerOpen,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const generateKey = (): number => Math.random();
  const NavigationLinks: Array<JSX.Element> = mainData.map((link) => (
    <Link key={generateKey()} onClick={(): void => history.push(link.path)}>
      {link.header}
    </Link>
  ));

  useEffect(() => {
    // const getData = async () => {
    //   const response = await Axios.get('https://api.spotify.com/v1/me', {
    //     headers: {
    //       authorization:
    //         'Bearer BQAFKj9uw_-2MwmMQ6JJmOupz9DiU50CNPTvSzwqTpuCTy_EY1F_j4vRNRrYooHBRY_TEq2NbFVWR6OizPzkbwj1Eh8ECZumgPcREEA-xia1F1AkwLWCJ8RzLzQnW9MqQejAbf9g14IZlzy-ytN4nIu40ZMz7d8c_V4pRaU6piSxFZg',
    //     },
    //   });
    //
    //   console.log('data', response.data);
    // };
    //
    // getData();
  }, []);

  return (
    <>
      <Wrapper isHamburgerOpen={isHamburgerOpen}>
        <Menu isHamburgerOpen={isHamburgerOpen}>
          {NavigationLinks}
          <Line />
          <button onClick={() => dispatch(getSingleTrack('taco'))}>
            Single Track
          </button>

          <SpotifyAuthWrapper>
            <SpotifyAuth
              redirectUri="http://localhost:3000/callback"
              clientID="db5735c1c59245f28cab1b66ce5fdd23"
              scopes={['user-read-private', 'user-read-email']}
              title={'Sign in'}
              noLogo
            />
          </SpotifyAuthWrapper>
        </Menu>
      </Wrapper>
    </>
  );
};

export default HamburgerMenu;
