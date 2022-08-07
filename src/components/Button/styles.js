import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button `
  padding: 1.4em 2rem;
  border-radius: 15px;
  font-size: 1.2rem;
  line-height: 0;
  color: ${(props) => props.theme['white']};
  outline: none;
  border: none;
  transition: 0.1s;
  cursor: pointer;

  ${({ variantType }) => variantType === 'icon' && css`
    padding: 0;
    color: ${({ theme, variantColor }) => theme[variantColor]};
    background-color: transparent;
  `};

  &:hover {
    filter: brightness(90%);
  }
`;


