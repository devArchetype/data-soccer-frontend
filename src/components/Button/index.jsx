import { ButtonContainer } from './styles';

export const Button = ({
	children,
	variantType='box',
	variantColor='green',
	title,
	onClick
}) => {
	return (
		<ButtonContainer
			title={title}
			variantType={variantType}
			variantColor={variantColor}
			onClick={onClick}
		>
			{children}
		</ButtonContainer>
	);
};
