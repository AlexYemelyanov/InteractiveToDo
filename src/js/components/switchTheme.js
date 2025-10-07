const switchTheme = () => {
	const checkbox = document.getElementById('toggleDarkMode');
	checkbox.addEventListener('change', () => {
		document.body.classList.toggle('dark');
	});
};

export default switchTheme;
