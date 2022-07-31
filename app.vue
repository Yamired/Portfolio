<template>
	<NuxtLoadingIndicator :height="5" :color="color" />
	<div class="flex flex-row">
		<Sidebar></Sidebar>
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
	const color = "linear-gradient(to right, hsl(var(--p)) , hsl(var(--pf)));";
</script>