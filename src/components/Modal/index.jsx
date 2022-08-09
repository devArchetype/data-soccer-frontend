import { ModalContainer, ModalWrap, ContentBox, ContentBoxHeader, CodeContainer } from './styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Info, X } from 'phosphor-react';
import { Button } from '../Button';
import { useState } from 'react';

export const Modal = ({ codes }) => {
	const [displayModalContainer, setDisplayModalContainer] = useState(false);

	const handleDisplayModalContainer = () => {
		setDisplayModalContainer((prevState) => !prevState);
	};

	return (
		<ModalWrap>
			<Button
				variantType='icon'
				variantColor='gray-600'
				onClick={handleDisplayModalContainer}
				title='Exibir query'
			>
				<Info size={20} />
			</Button>

			<ModalContainer displayModal={displayModalContainer}>
				<ContentBox>
					<ContentBoxHeader>
						<h4>Consulta(s) utilizada(s)</h4>
						<Button
							variantType='icon'
							variantColor='green-300'
							onClick={handleDisplayModalContainer}
							title='Fechar'
						>
							<X size={26} />
						</Button>
					</ContentBoxHeader>

					{codes ? (
						codes.map(({ label, code }) => {
							return (
								<CodeContainer key={label}>
									<strong>{label}</strong>
									<SyntaxHighlighter
										language="sql"
										showLineNumbers={true}
										showInlineLineNumbers={false}
										// wrapLongLines={true}
										lineProps={{ style: { flexWrap: 'wrap' } }}
									>
										{code}
									</SyntaxHighlighter>
								</CodeContainer>
							);
						})
					): <></>}
				</ContentBox>
			</ModalContainer>
		</ModalWrap>
	);
};
