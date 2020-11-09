import styled, { keyframes } from 'styled-components';

interface IHamburgerMenu {
  isHamburgerOpen: boolean;
}

export const Wrapper = styled.div<IHamburgerMenu>`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  animation-name: ${(props) =>
    props.isHamburgerOpen ? appearBackdrop : disappearBackdrop};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
`;

const disappearBackdrop = keyframes`
    0%{
        opacity: 1;
}
    50%{
        opacity: 0.5;
}
    100%{
        display: none;
        opacity: 0;
}`;
const appearBackdrop = keyframes`
    0%{
        opacity: 0;
}
    50%{
        opacity: 0.5;
}
    100%{
        display: flex;
        opacity: 1;
}`;

const disappearMenu = keyframes`
    0%{
        opacity: 1;
        width: 50%;
}
    50%{
        opacity: 0.5;
        width: 25%;

}
    100%{
        display: none;
        width: 0%;
        opacity: 0;
}
`;

const appearMenu = keyframes`
    0%{
        opacity: 0;
         width: 0%;
}
    50%{
        opacity: 0.5;
}
    100%{
        display: flex;
        opacity: 1;
        width: 50%;     
}
`;

export const Menu = styled.div<IHamburgerMenu>`
  animation-name: ${(props) =>
    props.isHamburgerOpen ? appearMenu : disappearMenu};
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  display: flex;
  justify-content: flex-start;
  padding-top: 50px;
  padding-left: 35px;
  align-items: flex-start;
  flex-direction: column;
  background-color: black;
  color: white;
  height: 100vh;
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  color: white;

  & > * {
    margin: 10px 0 10px 0;
  }
`;

export const Link = styled.button`
  font-weight: 700;
  font-size: 40px;
  border: none;
  background: none;
  color: white;
  &:hover {
    color: #1db954;
  }
  &:focus {
    outline: none;
  }
`;

export const Line = styled.div`
  width: 25px;
  height: 2px;
  background-color: white;
  margin: 30px 0 30px 8px;
`;

export const SpotifyAuthWrapper = styled.div`
  & > button {
    font-weight: 300;
    font-size: 2.4em;
    border: none;
    background: none;
    color: #d9dadc;
    &:hover {
      color: #1db954;
    }
    &:focus {
      outline: none;
    }
  }
`;
