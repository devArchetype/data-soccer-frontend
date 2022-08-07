import styled from  'styled-components';

export const RoundContainer = styled.li `
  width: 100%;
  list-style: none;
`;

export const RoundHeader = styled.div `
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2rem;
    padding: 0.5rem;
    border-radius: ${(props) => props.isCollapsed ? '15px 15px 0 0' : '15px'};
    background-color: ${(props) => props.theme['gray-100']};
    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme['gray-600']};
    }
`;

export const MatchesList = styled.ol `
  width: 100%;
  display: ${(props) => props.isCollapsed ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.2rem;
  list-style: none;
  overflow-x: auto;
`;

export const MatchContainer = styled.li `
  width: 100%;
  min-width: 700px;
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  padding: 0.1rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme['gray-200']};

  &:last-child {
    border-radius: 0 0 15px 15px;
  }
`;

const InlineWrapper = styled.div `
  display: inline-flex;
  align-items: center;
`;

export const CardsWrap = styled(InlineWrapper) `
  gap: 2rem;
`;

export const Card = styled(InlineWrapper) `
  gap: 0.4rem;
  font-size: 1.1rem;
  line-height: 0;
  font-weight: 500;
  color: ${(props) => props.theme['gray-600']};
`;

export const Team = styled (InlineWrapper) `
  flex-direction: ${(props) => props.isHome ? 'row' : 'row-reverse'};
  gap: 0.4rem;
  font-size: 1rem;
  line-height: 0;
  color: ${(props) => props.theme['blue-700']};

  img {
    height: 2rem;
    width: 2rem;
  }
`;

export const ScoreBoardWrap = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;

  span {
    line-height: 100%;
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-600']};
  }
`;

export const ScoreBoard = styled.div `
  line-height: 100%;
  font-weight: 600;
  font-size: 1.5rem;
  color: ${(props) => props.theme['green-300']};

  span {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0 0.2rem;
    color: ${(props) => props.theme['blue-700']};
  };
`;

