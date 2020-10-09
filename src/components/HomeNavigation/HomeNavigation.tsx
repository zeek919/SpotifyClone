import React, {FunctionComponent} from 'react';
import {Wrapper, Button} from "./Styled";
import {ReactComponent as LogoWhite} from '../../assests/white_logo.svg';
import HamburgerButton from "../HamburgerButton/HamburgerButton";

interface IHomeNavigation {
    changeHamburgerState: () => void;
}

const HomeNavigation: FunctionComponent<IHomeNavigation> = ({changeHamburgerState}) => <Wrapper>
    <Button>
        <LogoWhite />
    </Button>
    <HamburgerButton onClick={changeHamburgerState}/>
</Wrapper>

export default HomeNavigation;