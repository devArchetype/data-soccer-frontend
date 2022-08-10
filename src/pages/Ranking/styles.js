import styled from 'styled-components';

export const RankingPageContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

export const RankingContainer = styled.section`
  width: 100%;
  overflow: auto;
  border-radius: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;
    background-color: ${(props) => props.theme['gray-100']};

    tr {
      border-bottom: 3px solid ${(props) => props.theme['gray-200']};
      padding: 0 1rem;
    }

    th {
      text-align: center;
      font-size: 1.1rem;
      padding: .5rem;
      color: ${(props) => props.theme['gray-600']};
      background-color: ${(props) => props.theme['white']};
    }
  }
`;

export const Club = styled.tr`
  td {
    text-align: center;
    padding: .5rem;
    font-size: 1rem;
    white-space: nowrap;
  }

  .soccer-team div {
    max-width: 290px;
    display: flex;
    align-items: center;

    img {
      width: 2.5rem;
    }

    span {
      padding-left: 1rem;
    }
  }

  .points {
    font-weight: 700;
  }

  .position {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${(props) => props.theme['green-300']};
  }
`;
