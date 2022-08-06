import { FooterContainer } from './styles';

export const Footer = ({ textColor, bgColor }) => {
	return (
		<FooterContainer textColor={textColor} bgColor={bgColor}>
      &copy; DataSoccer | 2022
		</FooterContainer>
	);
};
