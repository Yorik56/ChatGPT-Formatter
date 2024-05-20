let browser = browser || chrome;

import { createButtonWithIcon } from './buttons/buttonWithIcon.js';
import { createDoubleButton } from './buttons/doubleButton.js';

const createIconButton = (icon, title, btnClass) =>
	createButtonWithIcon(
		browser.runtime.getURL(`dist/assets/icons/${icon}.svg`),
		title,  // altText will be the same as title in this case
		title,  // adding title here
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
		browser.runtime.getURL(`dist/assets/icons/${icon}.svg`),
		title, // altText will be the same as title in this case
		title, // adding title here
		options,
		(value) => console.log(`Option sélectionnée: ${value}`),
		btnClass
	);

export function createButtons() {
	const textButton = createIconButton("text-icon", "Raw text", ["text-button-class", "buttonHover"]);
	const svgButton = createIconButton("svg-icon", "SVG", ["svg-button-class", "buttonHover"]);
	const listButton = createIconButton("list-icon", "List", ["list-button-class", "buttonHover"]);
	const tableButton = createIconButton("table-icon", "Table", ["table-button-class", "buttonHover"]);
	const silentButton = createIconButton("silent-icon", "Silent mode (ask GPT to be concise)", ["silent_mode", "buttonHover"]);
	const languageDoubleButton = createDropdownButton("language-icon", "Chose language", ["French", "English", "Japanese", "Korean", "Spanish"], "language_selector");
	const codeBlockDoubleButton = createDropdownButton("code-icon", "Code snippet", ["markdown","java","javaScript", "python", "html", "css","sass","scss", "bash", "powershell"], "code_style_formatter");
	const drupalVersionButton = createDropdownButton("drupal-icon", "Choose Drupal Version", ["7", "8", "9", "10", "11"], "drupal_version_selector");

	return {
		svgButton,
		listButton,
		tableButton,
		codeBlockDoubleButton,
		languageDoubleButton,
		textButton,
		silentButton,
		drupalVersionButton
	};
}
