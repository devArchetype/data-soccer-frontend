import styled from 'styled-components';

export const FilterContainer = styled.section`
  width: 100%;
  margin-top: 1rem;
`;

export const FilterLimiter = styled.div`
  width: 100%;
	max-width: 1280px;
	padding: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme['white']};
  display: flex;
  justify-content: space-between;

  .container-context {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h1 {
      font-size: 1.2rem;
      color: ${(props) => props.theme['green-300']};
    }

    select {
      cursor: pointer;
      outline: 0 ;
      border: 0;
      padding: 0 0.5rem 0 0;
      background-color: ${(props) => props.theme['white']};
      color: ${(props) => props.theme['blue-700']};
      font-size: 1rem;
      font-weight: 600;
      font-family: inherit;

      option {
        background-color: ${(props) => props.theme['gray-100']};
        font-family: inherit;
        font-weight: inherit;
      }
    }

    select::-ms-expand {
      display: none;
    }
  }

  .container-league-logo img {
    width: 5rem;
  }
`;
