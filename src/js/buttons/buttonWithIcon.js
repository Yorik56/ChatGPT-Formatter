export function createButtonWithIcon(iconSrc, altText, title, onClickHandler, buttonClasses = []) {
	const button = document.createElement('button');
	const icon = document.createElement('img');

	icon.src = iconSrc;
	icon.alt = altText;
	button.appendChild(icon);

	// Set the title attribute for the button
	button.title = title;

	if (typeof buttonClasses === 'string') {
		buttonClasses = [buttonClasses];
	}

	buttonClasses.forEach(buttonClass => button.classList.add(buttonClass));

	button.onclick = (event) => {
		event.preventDefault();
		button.classList.toggle('active');
	};

	return button;
}
