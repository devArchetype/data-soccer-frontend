import styled, { css } from 'styled-components';

export const FilterContainer = styled.section`
  width: 100%;
  min-height: 6rem;
  border-radius: 15px;
  background-color: ${(props) => props.theme['gray-100']};
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;

  .container-context {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    select {
      cursor: pointer;
      outline: 0;
      border: 0;
      padding: 0 0.5rem 0 0;
      background-color: ${(props) => props.theme['gray-100']};
      color: ${(props) => props.theme['blue-700']};
      font-size: clamp(1vw, 1rem, 5.5vw);
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
    margin: .4rem 0;
    width: clamp(5vw, 5rem, 22vw);
    display: grid;
    place-items: center;
    border-radius: 1pc;
    border: 2px solid ${(props) => props.theme['gray-500']};;
  }

  ${({ responsive }) => responsive === 'false' && css`
    gap: 1rem;
    /* justify-content: center;
    align-items: center; */
    overflow: hidden;

    .container-context {
      padding-left: 1rem;

      h1 {
        margin-bottom: .3rem;
      }
    }

    .container-league-logo img {
      display: none;
    }
  `};
`;

export const ContainerHeader = styled.div `
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;

    h1 {
      font-size: clamp(1vw, 1.2rem, 7vw);
      color: ${(props) => props.theme['green-300']};
    }
`;
