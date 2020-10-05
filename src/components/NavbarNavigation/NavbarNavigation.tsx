import React, {FunctionComponent} from 'react';
import {HamburgerLine, Wrapper} from "./Styled";

const NavbarNavigation: FunctionComponent = () => {
    return <Wrapper>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
    </Wrapper>
}

export default NavbarNavigation;