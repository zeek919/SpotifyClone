import React, {FunctionComponent} from 'react';
import {Wrapper, Button} from "./Styled";
import {ReactComponent as LogoWhite} from '../../assests/white_logo.svg';
import NavbarNavigation from "../NavbarNavigation/NavbarNavigation";

interface NavbarProps {

}

const Navbar: FunctionComponent<NavbarProps> = () => <Wrapper>
    <Button>
        <LogoWhite />
    </Button>
    <NavbarNavigation />
</Wrapper>

export default Navbar;