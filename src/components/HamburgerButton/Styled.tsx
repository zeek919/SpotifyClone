import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
& > * {
    margin-top: 2px;
    margin-bottom: 3px;
}
z-index: 10;
`;

interface IHamburgerLine {
    opened: boolean,
    position?: "top" | "bottom" | "middle"
}

export const HamburgerLine = styled.div<IHamburgerLine>`
    width: 25px;
    padding: 4px 0 0 4px;
    border-radius: 5px;
    background-color: white;
    
    ${props => props.opened ? () => {
        const { position } = props;
    switch (position) {
        case("top"): {
            return "transform: translateY(230%) rotateZ(45deg);"
        }
        case("middle"): {
            return "opacity: 0;"
        }
        case("bottom"): {
            return "transform: translateY(-230%) rotateZ(-45deg);"
        }
    }
} : ""};

transition: 0.3s;
`;