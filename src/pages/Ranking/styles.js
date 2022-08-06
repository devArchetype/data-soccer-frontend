import styled from 'styled-components';

export const RankingContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
  overflow: auto;

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
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 2.5rem;
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
