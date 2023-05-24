export function createDropdownMenu(options, onSelectHandler) {
	const dropdown = document.createElement("div");
	dropdown.classList.add("dropdown");

	const dropdownButton = document.createElement("button");
	dropdownButton.classList.add("dropdown-button");

	// Replace the text with an SVG icon
	const dropdownIcon = document.createElement("img");
	dropdownIcon.src = chrome.runtime.getURL('assets/icons/chevron-down.svg'); // Replace with the URL of the SVG icon
	dropdownIcon.alt = "Dropdown Menu";
	dropdownButton.appendChild(dropdownIcon);
	dropdownButton.addEventListener("click", toggleDropdownMenu);
	const dropdownMenu = document.createElement("ul");
	dropdownMenu.classList.add("dropdown-menu");
	options.forEach((option) => {
		const menuItem = document.createElement("li");
		const optionButton = document.createElement("button");

		optionButton.classList.add("dropdown-item");
		optionButton.textContent = option; // Use the option value as the button text
		optionButton.addEventListener("click", (event) => {
			event.preventDefault();
			const selectedOption = optionButton.textContent;
			// Add active class to the selected option
			const activeItem = dropdownMenu.querySelector(".active");
			if (activeItem) {
				activeItem.classList.remove("active");
			}
			menuItem.classList.add("active");
			// Find the parent .double-button-container and add active class to its direct button child
			const doubleButtonContainer = dropdown.closest(".double-button-container");
			if (doubleButtonContainer) {
				const buttonChild = doubleButtonContainer.querySelector("button");
				if (buttonChild) {
					buttonChild.classList.add("active");
					buttonChild.setAttribute("data-option", selectedOption); // Add data-option attribute with the selected option
				}
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
		closeDropdownMenus(); // Fermer tous les autres menus déroulants
		const menu = dropdown.querySelector(".dropdown-menu");
		menu.classList.toggle("show");
		event.stopPropagation();
	}
}
