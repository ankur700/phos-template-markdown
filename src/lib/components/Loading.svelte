<div class="loader"></div>

<style>
	.loader {
		width: fit-content;
		font-weight: bold;
		font-family: monospace;
		font-size: 30px;
		color: var(--text-1);
		background: linear-gradient(90deg, var(--brand) calc(50% + 0.5ch), var(--text-2) 0)
			right/calc(200% + 1ch) 100%;
		-webkit-background-clip: text;
		background-clip: text;
		animation: l7 2s infinite steps(11);
	}
	.loader:before {
		content: 'Loading...';
	}
	@keyframes l7 {
		to {
			background-position: left;
		}
	}
</style>
