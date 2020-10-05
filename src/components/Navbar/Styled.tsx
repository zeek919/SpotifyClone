import styled from 'styled-components'

interface Props {
    sticky?: boolean
}
export const Wrapper = styled.div<Props>`
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    position: ${props => props.sticky ? 'sticky' : 'relative'};
    background-color: rgb(0,0,0);
    opacity: ${props => props.sticky ? '0.7' : '1'};
    
    @media (min-width: 1000px) {
        height: 75px;
    }
`;

export const Button = styled.button`
background: none;
border: none;
&:focus {
    outline: 0;
}

& > * {
    width: 100px;
    height: auto;
    
    @media (min-width: 1000px) {
        width: 130px;
        height: auto;
    }
}
`;
