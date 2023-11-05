import { alterForm } from './alterForm.js';
import { updateTextareaValue } from './updateTextareaValue.js';
import { closeDropdownMenus } from './buttons/dropdownMenu.js';
import '../css/styles.css';
document.addEventListener("click", closeDropdownMenus);
alterForm();
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