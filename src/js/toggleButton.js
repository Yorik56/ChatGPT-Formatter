export function toggleButton(buttonGroupClass, event) {
	const sameGroupButtons = document.querySelectorAll(`#${buttonGroupClass} button`);
	const clickedButton = event.target.closest('button');
	sameGroupButtons.forEach((button) => {
		if (button === clickedButton) {
			if (!button.classList.contains('active')) {
				button.classList.add('active');
			}
		} else {
			button.classList.remove('active');
		}
	});
}
