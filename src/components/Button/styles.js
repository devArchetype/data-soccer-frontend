import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button `
  padding: 1rem 2rem;
  border-radius: 15px;
  background-color: ${({ theme, variantColor }) => theme[variantColor]};
  font-size: 1.2rem;
  color: ${(props) => props.theme['white']};
  outline: none;
  border: none;
  cursor: pointer;

  ${({ variantType }) => variantType === 'icon' && css`
    padding: 0;
    background-color: transparent;
  `};
`;


