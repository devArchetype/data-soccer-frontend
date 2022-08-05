import styled from 'styled-components';

export const BackgroundImageContainer = styled.div `
  width: 100%;
  height: calc(100% - 70px);
  position: relative;
  background-image: url(./src/assets/images/home-background.jpg);
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: auto;
  background-color: ${(props) => props.theme['blue-700']};

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    inset: 0;
    background-image: url(./src/assets/images/home-background.jpg);
    background-position: center center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: auto;
    filter: blur(3px);
  }
`;

export const HomeContainer = styled.main `
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 4;
  padding-top: 70px;

  & div p {
    text-align: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme['white']};
  }

`;

// mobile: 2.5rem desktop: 5rem;
export const HomeTitle = styled.h1 `
  font-size: clamp(2.5rem, 10vw, 5rem);
  color: ${(props) => props.theme['white']};
`;


