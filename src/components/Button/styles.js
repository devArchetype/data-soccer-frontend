import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button `
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: ${({ theme, variantColor }) => theme[variantColor]};
  color: ${(props) => props.theme['white']};
  outline: none;
  border: none;

  ${({ variantType }) => variantType === 'icon' && css`
    padding: 0;
    background-color: transparent;
  `};
`;


