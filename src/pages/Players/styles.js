import styled from 'styled-components';

export const PageContainer = styled.main `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TeamContainerHeader = styled.div `
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border-radius: 15px;
    background-color: ${(props) => props.theme['gray-100']};

    h3 {
      font-size: 1rem;
      font-weight: 600;
      color: ${(props) => props.theme['blue-700']};
    }

    a {
     line-height: 100%;
    }
`;

export const PlayersList = styled.ul `
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: center;
  justify-items: center;
  gap: 1rem;
  list-style: none;
`;
