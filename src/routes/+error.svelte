<script>
	import { page } from '$app/state';
</script>

<div class="error__wrapper">
	<div class="error">
		<h2>{page.status}</h2>

		<p>{page.error?.message}</p>
		<ul>
			<li><a href="/" class="handdrawn__button">Home</a></li>
		</ul>
	</div>
</div>

<style>
	.error__wrapper {
		display: flex;
		justify-content: center;
		align-items: center;

		.error {
			display: flex;
			flex-direction: column;
			gap: var(--size-2);
			justify-content: center;
			align-items: center;
			background: var(--surface-2);
			box-shadow: var(--shadow-2);
			padding: var(--size-10);
			margin-block: var(--size-8);
			h2{
				font-size: var(--size-10);
			}
			p{
				font-size: var(--size-6);
				text-align: center;
			}
			ul {
				margin-top: var(--size-4);
				li {
					a {
						padding: var(--size-1) var(--size-2);
					}
				}
			}
		}
	}
</style>
