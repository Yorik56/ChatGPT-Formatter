export function createButtonWithIcon(iconSrc, altText, onClickHandler, buttonClass) {
	const button = document.createElement('button');
	const icon = document.createElement('img');

	icon.src = iconSrc;
	icon.alt = altText;
	button.appendChild(icon);

	// Ajouter la classe spécifique au bouton
	if (buttonClass) {
		button.classList.add(buttonClass);
	}

	button.onclick = (event) => {
		event.preventDefault();
		// Ajouter ou supprimer la classe "active" sur le bouton cliqué
		event.target.closest('button').classList.toggle('active');

		// Appeler le gestionnaire de clic personnalisé, s'il est défini
		if (onClickHandler) {
			onClickHandler(event);
		}
	};

	return button;
}