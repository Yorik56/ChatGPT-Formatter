export function createButtonWithIcon(iconSrc, altText, onClickHandler, buttonClasses  = []) {
	const button = document.createElement('button');
	const icon = document.createElement('img');

	icon.src = iconSrc;
	icon.alt = altText;
	button.appendChild(icon);

	// Convert to array if buttonClasses is a string
	if (typeof buttonClasses === 'string') {
		buttonClasses = [buttonClasses];
	}

	// Add specific classes to the button
	buttonClasses.forEach(buttonClass => button.classList.add(buttonClass));

	// Add logic to disable other buttons of the same type when one button is activated
	button.onclick = (event) => {
		event.preventDefault();

		// Get all buttons of the same type only if buttonClasses is not empty
		if (buttonClasses.length > 0) {
			const sameTypeButtons = document.querySelectorAll(`.${buttonClasses.join('.')}`);

			sameTypeButtons.forEach(sameTypeButton => {
				// Disable all other buttons of the same type
				if (sameTypeButton !== button) {
					sameTypeButton.classList.remove('active');
				}
			});
		}

		// Add or remove the "active" class on the clicked button
		event.target.closest('button').classList.toggle('active');

		// Call the custom click handler, if defined
		if (onClickHandler) {
			onClickHandler(event);
		}
	};

	return button;
}