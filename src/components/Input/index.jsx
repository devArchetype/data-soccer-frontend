import { FiSearch } from 'react-icons/fi';
import { InputBox, InputContainer, Label } from './styles';

export const Input = ({ type, placeholder, label, srLabel, min, max, step, value, onChange }) => {
	const inputID = label.split(' ').join('_');

	return (
		<InputContainer>
			<Label htmlFor={inputID} srLabel={srLabel}>{label}</Label>

			<div className="input-context">
				<div className="icon-search">
					<FiSearch size={20}/>
				</div>

				<InputBox
					id={inputID}
					type={type}
					placeholder={placeholder}
					min={min}
					max={max}
					step={step}
					value={value}
					onChange={onChange}
				/>
			</div>
		</InputContainer>
	);
};
