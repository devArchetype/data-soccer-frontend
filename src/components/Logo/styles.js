import styled from 'styled-components';

export const LogoContainer = styled.h2 `
  text-align: center;
  margin-bottom: 1rem;
  line-height: 0;
  font-size: clamp(2.3rem, 10vw, 5rem);
  color: ${(props) => props.theme['white']};
`;

export const AnimationContainer = styled.span `
    position: relative;
`;

export const AnimationBall = styled.span `
  position: absolute;
  z-index: 8;
  animation: bouncing 0.6s infinite alternate ;

  img {
    width: clamp(2.3rem, 10vw, 5rem);
    height: clamp(2.3rem, 10vw, 5rem);
  }

  @keyframes bouncing {
    0% {
      transform: translateY(12px);
    }

    100% {
      transform: translateY(-20px);
    }
  }
`;

export const AnimationGround = styled.span `
  img {
      width: clamp(2.3rem, 10vw, 5rem);
      height: clamp(2.3rem, 10vw, 5rem);
      position: relative;
      inset: auto 0 -20px 0;
    }
`;

export const LetterO = styled.div `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
