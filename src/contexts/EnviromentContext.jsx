import { createContext } from 'react';

export const EnviromentContext = createContext({});

const imagesPath = import.meta.env.VITE_IMAGES_PATH;

export const EnviromentContextProvider = ({ children }) => {
	return (
		<EnviromentContext.Provider value={{ imagesPath }}>
			{children}
		</EnviromentContext.Provider>
	);
};
