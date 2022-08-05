import { useEffect, useState } from 'react';
import { useMediaQuery } from '../../../../hooks/useMediaQuery';
import { Menu } from '../Menu';
import { Button } from '../../../Button';
import { HeaderContainer, HeaderLimiter } from './styles';
import { List, X } from 'phosphor-react';

export const Header = () => {
	const [menuIsVisible, setMenuIsVisible] = useState(true);
	const isDesktop = useMediaQuery('(min-width: 768px)');

	const handleMenuIsVisibility = () => {
		setMenuIsVisible((prevState) => !prevState);
	};

	useEffect(() => {
		isDesktop ? setMenuIsVisible(true) : setMenuIsVisible(false);
	}, [isDesktop]);

	return (
		<HeaderContainer>
			<HeaderLimiter>
				<h2 onClick={handleMenuIsVisibility}>DataSoccer</h2>
				<nav>
					{isDesktop || (
						<Button
							title={menuIsVisible ? 'Fechar menu' : 'Abrir menu'}
							variantType='icon'
							onClick={handleMenuIsVisibility}>
							{menuIsVisible ? <X size={30} /> : <List size={30} />}
						</Button>
					)}

					<Menu isVisible={menuIsVisible} isDesktop={isDesktop}/>
				</nav>
			</HeaderLimiter>
		</HeaderContainer>
	);
};
