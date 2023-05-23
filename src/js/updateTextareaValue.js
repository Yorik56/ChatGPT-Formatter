export function updateTextareaValue(textareaElem) {
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
			format += 'Your next answer will be formatted as text.\n';
			selection = true;
		}
		if (svgButton && svgButton.classList.contains('active')) {
			format += "The chat interface we're using operates in a web browser and supports markdown syntax, therefore you can incorporate an SVG in your responses which will be displayed in my browser.";
			format += "Here are the precise steps for successful SVG rendering:\n";
			format += "- Begin by writing '![svg](data:image/svg+xml;charset=utf8,' immediately follow this with the URL-encoded SVG code, then finish with a closing parenthesis.\n";
			format += "- The <svg> tag should include the attribute xmlns='http://www.w3.org/2000/svg'. Do not place the SVG code within a code snippet.";
			selection = true;
		}
		if (listButton && listButton.classList.contains('active')) {
			format += 'Your next answer will be a list.\n';
			selection = true;
		}
		if (tableButton && tableButton.classList.contains('active')) {
			format += 'Your next answer will be a table.\n';
			selection = true;
		}

		if (languageButton && languageButton.classList.contains('active')) {
			const language = languageButton.getAttribute('data-option'); // Change 'data-language' to 'data-option'
			format += `Apply the ${language} language.\n`;
			selection = true;
		}

		if (codeStyleButton && codeStyleButton.classList.contains('active')) {
			const codeStyle = codeStyleButton.getAttribute('data-option'); // Change 'data-code-style' to 'data-option'
			format += `Your next answer will be displayed as a code snippet in ${codeStyle.toLowerCase()} format. \n`;
			selection = true;
		}

		if (silentButton && silentButton.classList.contains('active')) {
			format += 'In your next answer you\'ll Respond in a very concise manner without providing any explanation. \n';
			selection = true;
		} else {
			format += 'Comment what you\'re doing. \n';
		}

		if (!selection) {
			format += 'No format selected, your next answer will be plain text. \n';
		}

		textareaElem.value = format + '\n' + textareaElem.value;
	} else {
		console.error('Textarea not found');
	}
}
