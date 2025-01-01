<script lang="ts">
	import { LOCALE } from '$lib/config.ts';

	let { pubDatetime, modDatetime } = $props();

	const myDatetime = new Date(modDatetime ? modDatetime : pubDatetime);

	const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
</script>

<time dateTime={myDatetime.toISOString()}>{date}</time>
