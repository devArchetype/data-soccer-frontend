import styled from 'styled-components';

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  inset: 0;
  background-image: url(./src/assets/images/home-background.jpg);
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme['blue-700']};
  filter: brightness(50%);
`;

export const HomeContainer = styled.main`
  min-height: calc(100vh - 110px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 6;
  padding-top: 60px;

  & div p {
    text-align: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme['white']};
  }

`;
