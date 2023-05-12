export function createDropdownMenu(options, onSelectHandler) {
	const dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");

	const dropdownButton = document.createElement("button");
	dropdownButton.classList.add("dropdown-button");

	// Remplacer le texte par une icône SVG
	const dropdownIcon = document.createElement("img");
	dropdownIcon.src = chrome.extension.getURL('icons/chevron-down.svg'); // Remplacez par l'URL de l'icône SVG
	dropdownIcon.alt = "Menu déroulant";
	dropdownButton.appendChild(dropdownIcon);

	dropdownButton.addEventListener("click", toggleDropdownMenu);

	const dropdownMenu = document.createElement("ul");
	dropdownMenu.classList.add("dropdown-menu");

	options.forEach((option) => {
		const menuItem = document.createElement("li");
		const optionButton = document.createElement("button");

		optionButton.classList.add("dropdown-item");
		optionButton.textContent = option; // Utiliser la valeur de l'option comme texte du bouton
		optionButton.addEventListener("click", (event) => {
			event.preventDefault();
			onSelectHandler(option, event); // Passer l'option et l'événement en tant qu'arguments au gestionnaire de sélection
			const formatterCode = document.querySelector(".code_style_formatter");
			if (formatterCode) {
				formatterCode.setAttribute("data-code-style", option); // Mettre à jour l'attribut "data-code-style" avec l'option choisie
			}
			closeDropdownMenus();
		});

		menuItem.appendChild(optionButton);
		dropdownMenu.appendChild(menuItem);
	});

	dropdown.appendChild(dropdownButton);
	dropdown.appendChild(dropdownMenu);

	return dropdown;
}






export function closeDropdownMenus(event) {
	const menus = document.querySelectorAll('.dropdown-menu.show');
	menus.forEach(menu => {
		menu.classList.remove('show');
	});
}

function toggleDropdownMenu(event) {
	event.preventDefault();
	const dropdown = event.currentTarget.closest(".dropdown");
	if (dropdown) {
		const menu = dropdown.querySelector(".dropdown-menu");
		menu.classList.toggle("show");
		event.stopPropagation();
	}
}
