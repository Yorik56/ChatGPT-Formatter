import { createButtons } from './createButtons.js';
import { toggleButton } from './toggleButton.js';
export function alterForm() {
	const form = document.querySelector('form');
	const buttonGroup = document.createElement('div');
	buttonGroup.id = 'button-group';

	if (form) {
		const divFormatter = document.createElement('div');
		const buttons = createButtons();

		buttonGroup.appendChild(buttons.textButton);
		buttonGroup.appendChild(buttons.svgButton);
		buttonGroup.appendChild(buttons.listButton);
		buttonGroup.appendChild(buttons.tableButton);
		divFormatter.appendChild(buttonGroup);

		divFormatter.appendChild(buttons.silentButton);
		divFormatter.appendChild(buttons.languageDoubleButton);
		divFormatter.appendChild(buttons.codeBlockDoubleButton);
		divFormatter.classList.add(
			"format-bar", "rounded-[26px]", "flex", "w-full", "py-2", "flex-grow", "md:py-3", "md:pl-4", "relative", "border",
			"border-black/10", "bg-white", "dark:border-gray-900/50", "dark:text-white", "dark:bg-gray-700",
			"shadow-[0_0_10px_rgba(0,0,0,0.10)]", "dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]"
		);

		form.prepend(divFormatter);
		buttonGroup.addEventListener('click', (event) => {
			toggleButton(buttonGroup.id, event);
		});
	} else {
		console.error('Formulaire introuvable');
	}
}
