import { createButtonWithIcon } from './buttons/buttonWithIcon.js';
import { closeDropdownMenus } from './buttons/dropdownMenu.js';
import { createDoubleButton } from './buttons/doubleButton.js';

function alterForm() {
	const form = document.querySelector('form.stretch');
	const textareaElem = document.querySelector('textarea');

	if (form && textareaElem) {
		const divFormatter = document.createElement('div');
		// Modifier l'appel à la fonction createButtonWithIcon pour inclure la classe spécifique
		const tableButton = createButtonWithIcon(chrome.extension.getURL('icons/table-icon.svg'), 'Tableau', () => {
			// Logique pour gérer le clic sur le bouton "Tableau"
		}, "table_formatter");
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

		divFormatter.appendChild(tableButton);
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
			const tableFormatter = document.querySelector('.table_formatter');
			const codeFormatter = document.querySelector('.code_style_formatter');
			const codeStyle = codeFormatter.getAttribute('data-code-style');

			if (tableFormatter.classList.contains('active') && codeFormatter.classList.contains('active')) {
				if (codeStyle) {
					format += `Your next answer will be a table in a code snippet in ${codeStyle.toLowerCase()} format : \n\n`;
				} else {
					format += 'Your next answer will be a table in a code snippet in markdown format : \n\n';
				}
				selection = true;
			} else if (tableFormatter.classList.contains('active')) {
				format += 'Your next answer will be a table in markdown format : \n\n';
				selection = true;
			} else if (codeFormatter.classList.contains('active')) {
				if (codeStyle) {
					format += `Your next answer will be a code snippet in ${codeStyle.toLowerCase()} : \n\n`;
				} else {
					format += 'Your next answer will be a code snippet in markdown format : \n\n';
				}
				selection = true;
			}

			if (!selection) {
				format += 'Your next answer will be formatted as text : \n\n';
			}

			textareaElem.value = format + textareaElem.value;
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