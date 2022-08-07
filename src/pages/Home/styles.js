import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
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
    filter: blur(2px);
  }
`;

export const HomeContainer = styled.main`
  min-height: calc(100vh - 110px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 4;
  padding-top: 60px;
  /* background-color: orange; */

  & div p {
    text-align: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme['white']};
  }

`;
