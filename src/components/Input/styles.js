import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background-color: ${(props) => props.theme['gray-100']};
`;

export const InputWrap = styled.div `
  height: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.1rem;
  font-size: 1.5rem;
  border-radius: 15px;
  border: 2px solid transparent;
  background-color: ${(props) => props.theme['gray-200']};

  &:focus-within {
    border-color: ${(props) => props.theme['green-300']};
>>>>>>> page/Teams
  }
`;

export const InputBox = styled.input`
  width: 100%;
  min-width: 160px;
  height: 100%;
  padding: 0.6rem;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme['gray-200']};
`;

export const Label = styled.label`
  padding: 0.4rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  ${({ srLabel }) => srLabel && css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  `};
`;
