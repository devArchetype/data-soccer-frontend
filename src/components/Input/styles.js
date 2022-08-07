import styled, { css } from 'styled-components';

export const InputContainer = styled.div `
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputBox = styled.input `
  padding: 0.5rem;
  font-size: 1rem;
  outline: none;
  border: 2px solid transparent;
  border-radius: 15px;
  background-color: ${(props) => props.theme['gray-100']};

  &:focus {
    border-color: ${(props) => props.theme['green-300']};
  }

  &::placeholder {
    /* font-weight: 600; */
  }
`;

export const Label = styled.label `
  font-size: 1rem;
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
