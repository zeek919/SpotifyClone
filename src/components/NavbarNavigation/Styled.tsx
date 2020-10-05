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
`;

export const HamburgerLine = styled.div`
    width: 25px;
    padding: 4px 0 0 4px;
    border-radius: 5px;
    background-color: white;
`;