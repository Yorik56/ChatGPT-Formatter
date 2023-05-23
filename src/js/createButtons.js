import { createButtonWithIcon } from './buttons/buttonWithIcon.js';
import { createDoubleButton } from './buttons/doubleButton.js';

const createIconButton = (icon, title, btnClass) =>
	createButtonWithIcon(
		browser.extension.getURL(`assets/icons/${icon}.svg`),
		title,
		(event) => {
			const buttonGroupButtons = document.querySelectorAll('#button-group button');
			buttonGroupButtons.forEach((button) => {
				if (button !== event.target) {
					button.classList.remove('active');
				} else {
					button.classList.add('active');
				}
			});
		},
		btnClass
	);

const createDropdownButton = (icon, title, options, btnClass) =>
	createDoubleButton(
		browser.extension.getURL(`assets/icons/${icon}.svg`),
		title,
		options,
		(value) => console.log(`Option sélectionnée: ${value}`),
		btnClass
	);

const buttonGroupClass = 'button-group'; // Replace with the actual button group ID or class
const buttonGroup = document.querySelector(`#${buttonGroupClass}`);

export function createButtons() {
	const svgButton = createIconButton("svg-icon", "SVG", "svg-button-class");
	const listButton = createIconButton("list-icon", "Liste", "list-button-class");
	const tableButton = createIconButton("table-icon", "Tableau", "table-button-class");
	const textButton = createIconButton("text-icon", "Text", "text-button-class");
	const silentButton = createIconButton("silent-icon", "Silent", "silent_mode");

	const codeBlockDoubleButton = createDropdownButton("code-icon", "Extrait de code", ["JavaScript", "Python", "HTML", "CSS"], "code_style_formatter");
	const languageDoubleButton = createDropdownButton("language-icon", "Language", ["French", "English", "Japanese", "Korean", "Spanish"], "language_selector");

	return {
		svgButton,
		listButton,
		tableButton,
		codeBlockDoubleButton,
		languageDoubleButton,
		textButton,
		silentButton
	};
}
