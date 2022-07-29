<template>
	<NuxtLoadingIndicator :height="5" :color="color" />
	<div class="flex flex-row">
		<Sidebar></Sidebar>
		<div class="container flex flex-col mx-auto px-2 items-center">
			<NuxtPage/>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const color = "linear-gradient(to right, hsl(var(--p)) , hsl(var(--pf)));";
</script>