import React, {FunctionComponent} from 'react';
import { NavigationValuesTypes } from '../../constants/MainNavigationValues';
import {Menu, Wrapper, Link, Line} from "./Styled";
import {useHistory} from 'react-router-dom';

interface IHomeNavigation {
    mainData: NavigationValuesTypes,
    isHamburgerOpen: boolean
}

const HamburgerMenu: FunctionComponent<IHomeNavigation> = ({mainData, isHamburgerOpen}) => {

        let history = useHistory();

    const generateKey = (): number => Math.random();
    const NavigationLinks: Array<JSX.Element> = mainData.map(link => <Link key={generateKey()} onClick={():void => history.push(link.path)}>{link.header}</Link> )

    return <Wrapper isHamburgerOpen={isHamburgerOpen} >
        <Menu isHamburgerOpen={isHamburgerOpen}>{NavigationLinks}
        <Line /></Menu>
    </Wrapper>
}

export default HamburgerMenu;