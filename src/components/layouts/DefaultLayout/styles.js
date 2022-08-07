import styled from 'styled-components';

export const LayoutContainer = styled.div `
	width: 100vw;
	max-width: calc(100vw - 4px);
	/* height: 100vh; */
	/* min-height: 100vh; */
  overflow: hidden;
`;

export const ContentContainer = styled.div `
	width: 100%;
	max-width: 1280px;
	height: calc(100% - 70px);
	padding: 1rem;
	margin: 0 auto;
`;
