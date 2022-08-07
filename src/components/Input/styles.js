import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  max-width: 768px;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['gray-100']};
  border-radius: 15px;

  .input-context {
    position: relative;

    .icon-search{
      position: absolute;
      top: .65rem;
      right: 1rem;
    }
  }
`;

export const InputBox = styled.input`
  font-size: 1rem;
  padding: .6rem;
  outline: none;
  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme['gray-200']};

  &:focus {
    border-color: ${(props) => props.theme['green-300']};
  }

  &::placeholder {
    font-weight: 600;
  }
`;

export const Label = styled.label`
  padding: .5rem;
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
