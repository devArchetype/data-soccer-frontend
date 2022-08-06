import styled from 'styled-components';

export const BackgroundImageContainer = styled.div `
  position: absolute;
  z-index: 1;
  inset: 0;
  background-image: url(./src/assets/images/home-background.jpg);
  background-position-x: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: auto;
  filter: brightness(60%);
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
  padding-top: 60px;
  /* background-color: orange; */

  & div p {
    text-align: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme['white']};
  }

`;
