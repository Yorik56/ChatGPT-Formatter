import { alterForm } from './alterForm.js';
import { updateTextareaValue } from './updateTextareaValue.js';
import { closeDropdownMenus } from './buttons/dropdownMenu.js';
import '../css/styles.css';

document.addEventListener("click", closeDropdownMenus);
alterForm();

const form = document.querySelector('form');

if (form) {
	const textareaElem = document.querySelector('textarea');
	if (textareaElem) {
		const submitButton = textareaElem.parentElement.nextElementSibling;
		if (submitButton) {
			submitButton.addEventListener('click', (event) => {
				event.preventDefault(); // Empêcher le comportement par défaut
				updateTextareaValue(textareaElem);
			});
		}
	}
	form.addEventListener('keydown', (event) => {
		if (event.keyCode === 13 && !event.shiftKey) {
			event.preventDefault(); // Empêcher le comportement par défaut
			const textareaElem = document.querySelector('textarea');
			updateTextareaValue(textareaElem);
		}
	});
}
