import styled from 'styled-components';

export const PlayerContainer = styled.li `
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;
  border-radius: 15px;
  background-color: ${(props) => props.theme['gray-100']};
`;

export const PlayerContainerHeader = styled.div `
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 100%;
  font-weight: 500;
  color: ${(props) => props.theme['green-300']};

  span {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    text-align: center;
    font-size: 1.1rem;
    color: ${(props) => props.theme['blue-700']};
    border-radius: 50%;
    background-color: ${(props) => props.theme['gray-200']};
  }
`;

const InlineWrapper = styled.div `
  display: inline-flex;
  align-items: center;
`;

export const ImageContainer = styled(InlineWrapper) `
  width: 100%;
  justify-content: space-around;
`;

export const PlayerPlaceholder = styled.div `
  img {
    width: 80px;
  }
`;

export const CardsWrap = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Card = styled(InlineWrapper) `
  gap: 0.4rem;
  font-size: 1.1rem;
  line-height: 0;
  font-weight: 500;
  color: ${(props) => props.theme['gray-600']};
`;

export const PlayerDataList = styled.ul `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  list-style: none;
`;

export const PlayerData = styled.li `
  line-height: 100%;
  font-size: 0.9rem;
  color: ${(props) => props.theme['gray-600']};

  span {
    font-weight: 500;
    color: ${(props) => props.theme['blue-700']};
  }
`;
