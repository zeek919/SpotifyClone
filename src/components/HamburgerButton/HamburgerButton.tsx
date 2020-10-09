import React, {FunctionComponent, useState} from 'react';
import {HamburgerLine, Wrapper} from "./Styled";

interface IHamburgerButton {
    onClick: () => void
}

const HamburgerButton: FunctionComponent<IHamburgerButton> = ({onClick}) => {
    const [used, changeUsage] = useState<boolean>(false);

    const onClickHandler = (): void => {
        changeUsage(!used);
        onClick();
    }

    return <Wrapper onClick={(): void => onClickHandler()} data-testid={"hamburgerBox"}>
        <HamburgerLine opened={used} position={"top"}/>
        <HamburgerLine opened={used} position={"middle"}/>
        <HamburgerLine opened={used} position={"bottom"}/>
    </Wrapper>
}

export default HamburgerButton;