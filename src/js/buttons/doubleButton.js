import { createButtonWithIcon } from './buttonWithIcon.js';
import { createDropdownMenu } from './dropdownMenu.js';

export function createDoubleButton(iconSrc, altText, title, options, onSelectHandler, leftButtonClass, rightDropdownClass) {
	const doubleButtonContainer = document.createElement("div");
	doubleButtonContainer.classList.add("double-button-container");

	const leftButton = createButtonWithIcon(iconSrc, altText, title, () => {
		leftButton.classList.toggle("active"); // Toggle la classe "active" sur le bouton gauche
		const formatterCode = document.querySelector(".code_style_formatter");
		if (formatterCode) {
			formatterCode.classList.toggle("active"); // Toggle la classe "active" sur .code_style_formatter
		}
	});
	if(leftButtonClass)leftButton.classList.add(leftButtonClass);
	let rightDropdownMenu = createDropdownMenu(options, (value, event) => {
		event.preventDefault();
		console.log(`Option sélectionnée: ${value}`);
		const formatterCode = document.querySelector(".code_style_formatter");
		if (formatterCode) {
			formatterCode.setAttribute("data-code-style", value); // Mettre à jour l'attribut "data-code-style" avec l'option choisie
			formatterCode.classList.add("active"); // Ajouter la classe "active" à .code_style_formatter
		}
	});
	if (rightDropdownClass)rightDropdownMenu.classList.add(rightDropdownClass);
	doubleButtonContainer.appendChild(leftButton);
	doubleButtonContainer.appendChild(rightDropdownMenu);

	return doubleButtonContainer;
}

