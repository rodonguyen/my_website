import { useEffect, useState } from 'react';

export const createHyperlink = (link, content) => {
	return (
		<a target='_blank' rel='noopener noreferrer' href={link}>
			{content}
		</a>
	);
};

export const useDarkMode = () => {
	// Utilise cache/local storage to store themeMode, keep it consistent throughout the session
	let darkThemeEnabledOnStorage = localStorage.getItem('darkThemeEnabled');
	darkThemeEnabledOnStorage = darkThemeEnabledOnStorage
		? JSON.parse(darkThemeEnabledOnStorage)
		: false;
	const [darkThemeEnabled, changeTheme] = useState(darkThemeEnabledOnStorage);

	useEffect(() => {
		if (darkThemeEnabled === true) {
			document.body.classList.add('dark');
			localStorage.setItem('darkThemeEnabled', 'true');
		} else if (darkThemeEnabled === false) {
			document.body.classList.remove('dark');
			localStorage.setItem('darkThemeEnabled', 'false');
		}
	}, [darkThemeEnabled]);

	return [darkThemeEnabled, changeTheme];
};

export const changeWindowTitle = (path) => {
	if (path === '/') {
		document.title = 'Rodo';
	} else if (path === '/resume') {
		document.title = 'Resume';
	} else if (path === '/list-100') {
		document.title = 'List 100';
	} else if (path === '/contactme') {
		document.title = 'Contact me';
	} else if (path === '/dateme') {
		document.title = '❤️❤️';
	} else {
		document.title = path;
	}
};
