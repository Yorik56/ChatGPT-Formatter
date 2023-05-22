import { createButtonWithIcon } from './buttons/buttonWithIcon.js';
import { closeDropdownMenus } from './buttons/dropdownMenu.js';
import { createDoubleButton } from './buttons/doubleButton.js';

function toggleButton(buttonGroupClass, event) {
	// Fetch all buttons in the same group
	const sameGroupButtons = document.querySelectorAll(`#${buttonGroupClass} button`);
	sameGroupButtons.forEach((button) => {
		// Ensure that only the clicked button is active
		if (button === event.target.closest('button')) {
			button.classList.add('active'); // Ajoute la classe 'active' au bouton cliqué
		} else {
			button.classList.remove('active');
		}
	});
}

function alterForm() {
	const form = document.querySelector('form.stretch');
	const textareaElem = document.querySelector('textarea');
	const buttonGroup = document.createElement('div');
	buttonGroup.id = 'button-group';

	if (form && textareaElem) {
		const divFormatter = document.createElement('div');
		const svgButton = createButtonWithIcon(
			browser.extension.getURL("icons/svg-icon.svg"),
			"SVG",
			(event) => {
				toggleButton('button-group', event);
			},
			"svg-button-class"
		);

		const listButton = createButtonWithIcon(
			browser.extension.getURL("icons/list-icon.svg"),
			"Liste",
			(event) => {
				toggleButton('button-group', event);
			},
			"list-button-class"
		);

		const tableButton = createButtonWithIcon(
			chrome.extension.getURL('icons/table-icon.svg'),
			'Tableau',
			(event) => {
				toggleButton('button-group', event);
			},
			"table-button-class"
		);
		const codeFormats = ["JavaScript", "Python", "HTML", "CSS"];
		const leftButtonClass = "code_style_formatter";
		const codeBlockDoubleButton = createDoubleButton(
			browser.extension.getURL("icons/code-icon.svg"),
			"Extrait de code",
			codeFormats,
			(value) => {
				console.log(`Option sélectionnée: ${value}`);
				// Logique pour gérer la sélection de l'option
			},
			leftButtonClass
		);
		const languageOptions = ["Français", "Anglais"];
		const languageButtonClass = "language_selector";
		const languageDoubleButton = createDoubleButton(
			browser.extension.getURL("icons/language-icon.svg"),
			"Language",
			languageOptions,
			(value) => {
				console.log(`Langage sélectionné: ${value}`);
				// Logique pour gérer la sélection de l'option
			},
			languageButtonClass
		);

		const textButton = createButtonWithIcon(
			browser.extension.getURL("icons/text-icon.svg"),
			"Text",
			(event) => {
				toggleButton('button-group', event);
			},
			"text-button-class"
		);
		const silentButtonClass = "silent_mode";
		const silentButton = createButtonWithIcon(
			browser.extension.getURL("icons/silent-icon.svg"),
			"Silent",
			() => {
				console.log("Bouton Silent cliqué");
				// Logique pour gérer le clic sur le bouton Silent
			},
			silentButtonClass
		);
		buttonGroup.appendChild(textButton);
		buttonGroup.appendChild(svgButton);
		buttonGroup.appendChild(listButton);
		buttonGroup.appendChild(tableButton);
		divFormatter.appendChild(buttonGroup);

		divFormatter.appendChild(silentButton);
		divFormatter.appendChild(languageDoubleButton);
		divFormatter.appendChild(codeBlockDoubleButton);
		divFormatter.classList.add(
			"format-bar", "flex", "flex-col", "w-full", "py-2", "flex-grow", "md:py-3", "md:pl-4", "relative", "border",
			"border-black/10", "bg-white", "dark:border-gray-900/50", "dark:text-white", "dark:bg-gray-700", "rounded-md",
			"shadow-[0_0_10px_rgba(0,0,0,0.10)]", "dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"
		);
		textareaElem.parentNode.parentNode.insertBefore(divFormatter, textareaElem.parentNode);
	} else {
		console.error('Formulaire introuvable');
	}
}

document.addEventListener("click", closeDropdownMenus);

// Exécuter la fonction pour altérer le formulaire lorsque la page est chargée
window.onload = function () {
	alterForm();
	// Donne moi 5 fruits
	function updateTextareaValue(textareaElem) {
		if (textareaElem) {
			let format = 'Forget the format of your previous answer, ';
			let selection = false;

			const textButton = document.querySelector('#button-group .text-button-class');
			const svgButton = document.querySelector('#button-group .svg-button-class');
			const listButton = document.querySelector('#button-group .list-button-class');
			const tableButton = document.querySelector('#button-group .table-button-class');

			const languageButton = document.querySelector('.language_selector');
			const codeStyleButton = document.querySelector('.code_style_formatter');
			const silentButton = document.querySelector('.silent_mode');

			if (textButton && textButton.classList.contains('active')) {
				format += 'Your next answer will be formatted as text : \n';
				selection = true;
			}
			if (svgButton && svgButton.classList.contains('active')) {
				format += 'Your next answer will be an SVG image : \n';
				selection = true;
			}
			if (listButton && listButton.classList.contains('active')) {
				format += 'Your next answer will be a list : \n';
				selection = true;
			}
			if (tableButton && tableButton.classList.contains('active')) {
				format += 'Your next answer will be a table : \n';
				selection = true;
			}

			if (languageButton && languageButton.classList.contains('active')) {
				const language = languageButton.getAttribute('data-language');
				format += `Apply the ${language} language : \n\n`;
				selection = true;
			}

			if (codeStyleButton && codeStyleButton.classList.contains('active')) {
				const codeStyle = codeStyleButton.getAttribute('data-code-style');
				format += `Your next answer will be displayed as a code snippet in ${codeStyle.toLowerCase()} format. \n`;
				selection = true;
			}

			if (silentButton && silentButton.classList.contains('active')) {
				format += 'In your next answer you\'ll Respond in a very concise manner without providing any explanation. \n';
				selection = true;
			}

			if (!selection) {
				format += 'No format selected, your next answer will be plain text. \n';
			}

			textareaElem.value = format + '\n' + textareaElem.value;
		} else {
			console.error('Textarea not found');
		}
	}

	// Ecouter l'événement submit sur le formulaire
	const form = document.querySelector('form.stretch');
	if (form) {
		form.addEventListener('submit', (event) => {
			const textareaElem = document.querySelector('textarea');
			updateTextareaValue(textareaElem);
		});
		form.addEventListener('keydown', (event) => {
			if (event.keyCode === 13 && !event.shiftKey) { // Ignorer l'appui sur Entrée + Majuscule
				const textareaElem = document.querySelector('textarea');
				updateTextareaValue(textareaElem);
			}
		});
	}
};