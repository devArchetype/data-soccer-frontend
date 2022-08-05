import styled from 'styled-components';

export const FooterContainer = styled.footer `
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${(props) => props.theme[props.textColor]};
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => props.theme[props.bgColor] || 'transparent'};
`;
