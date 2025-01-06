type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export function attachCopyButtons() {
	const copyButtonLabel = 'Copy';
	const codeBlocks = Array.from(document.querySelectorAll('pre'));

	for (const codeBlock of codeBlocks) {
		const wrapper = document.createElement('div');
		wrapper.style.position = 'relative';

		const copyButton = document.createElement('button');
		copyButton.className = 'copy-code';
		copyButton.innerHTML = copyButtonLabel;
		codeBlock.setAttribute('tabindex', '0');
		codeBlock.appendChild(copyButton);

		// wrap codebock with relative parent element
		codeBlock?.parentNode?.insertBefore(wrapper, codeBlock);
		wrapper.appendChild(codeBlock);

		copyButton.addEventListener('click', async () => {
			await copyCode(codeBlock, copyButton);
		});
	}

	async function copyCode(block: HTMLPreElement, button: HTMLButtonElement) {
		const code = block.querySelector('code');
		const text = code?.innerText;

		if (!text) return;
		await navigator.clipboard.writeText(text);

		// visual feedback that task is completed
		button.innerText = 'Copied';

		setTimeout(() => {
			button.innerText = copyButtonLabel;
		}, 700);
	}
}

export function backToTop() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}