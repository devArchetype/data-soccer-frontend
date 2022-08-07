import styled from 'styled-components';

export const GraphicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 400px;
  width: 100%;
  padding: 2rem 0;
  border-radius: 15px;
  background-color: ${(props) => props.theme['gray-100']};
  font-size: .8rem;
  overflow-x: auto;
  overflow-y: hidden;

  * {
    border-radius: 15px;
  }

  .title {
    font-size: .7rem;
    text-align: center;
  }

  .graphic-responsive {
    min-width: 500px;
  }

  .custom-tooltip {
    max-width: 300px;
    text-align: justify;
    color: ${(props) => props.theme['blue-700']};
    font-size: .7rem;
    padding: 1rem;
    background-color: ${(props) => props.theme['gray-100']};

    .label {
      font-weight: 700;
    }
  }
`;
