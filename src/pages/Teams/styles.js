import styled from 'styled-components';

export const TeamsContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  .teams-presentation {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

export const Team = styled.div`
  min-width: 23.5%;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;

  .information {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 1.4rem;
      margin-bottom: .5rem;
      color: ${(props) => props.theme['green-300']};
    }

    .stats {
      display: flex;
      gap: 1.2rem;

      ul {
        list-style: none;

        .card {
          display: flex;
          margin-top: .3rem;
          gap: .2rem;

          img {
            width: .8rem;
          }
        }

        span {
          color: ${(props) => props.theme['gray-600']};
        }
      }
    }
  }

  .cast {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
      width: clamp(3vw, 4.5rem, 25vw);
    }

    a {
      color: ${(props) => props.theme['green-300']};
    }
  }
`;
