import { useContext } from 'react';
import { EnviromentContext } from '../../contexts/EnviromentContext';
import {
	LogoContainer,
	LetterO,
	AnimationContainer,
	AnimationGround,
	AnimationBall
} from './styles';

export const Logo = () => {
	const { imagesPath } = useContext(EnviromentContext);

	return (
		<LogoContainer>
      DataS
			<AnimationContainer>
				<LetterO>o</LetterO>

				<AnimationBall>
					<img src={`${imagesPath}/logo-ball.png`} alt="Bola de futebol" />
				</AnimationBall>

				<AnimationGround>
					<img src={`${imagesPath}/logo-ground.png`} alt="Gramado" />
				</AnimationGround>
			</AnimationContainer>
      ccer
		</LogoContainer>
	);
};
