import styled from 'styled-components';

export const GraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  max-height: 850px;
  width: 100%;
  padding: 2rem 0;
  border-radius: 15px;
  background-color: ${(props) => props.theme['gray-100']};
  font-size: .9rem;
  overflow: auto;
  overflow-y: hidden;

  .title {
    font-size: .7rem;
    text-align: center;
  }

  .graphic-responsive {
    min-width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;

    .chart {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-weight: 400;
    }
  }
`;
