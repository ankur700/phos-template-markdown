<script lang="ts">
	import { LOCALE } from '$lib/config.ts';

	let { pubDatetime, modDatetime } = $props();

	const myDatetime = new Date(modDatetime ? modDatetime : pubDatetime);

	const date = myDatetime.toLocaleDateString(LOCALE.langTag, {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	const time = myDatetime.toLocaleTimeString(LOCALE.langTag, {
		hour: '2-digit',
		minute: '2-digit'
	});
</script>

<time dateTime={myDatetime.toISOString()}>{date}</time>
<span aria-hidden="true"> | </span>
<span class="sr-only">&nbsp;at&nbsp;</span>
<span class="text-nowrap">{time}</span>
