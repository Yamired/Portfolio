<template #nav>
	<aside class="xl:w-2/12 lg:w-3/12 h-screen" aria-label="Sidebar">
		<div class="flex flex-col justify-around overflow-y-auto h-screen border-r-2 border-primary bg-neutral p-2">
			<div class="flex justify-center pt-8 pl-1 pr-1 pb-8">
				<div class="flex flex-col items-center justify-between">
					<span class="title-family tracking-widest 2xl:text-2xl xl:text-xl md:text-lg sm:text-md leading-10 whitespace-nowrap text-primary">Corentin Derimay</span>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
					</svg>
				</div>
			</div>
			<div class="h-4/5 py-4 px-4">
				<ul class="menu bg-base-100 p-2 rounded-box">
					<li class="hover-bordered mt-3 mb-3">
						<NuxtLink to="/" :active-class="classActive" class="n-link-base">
							<svg class="h7 w-7 transition text-accent-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
							<p class="text-secondary-focus font-bold">Accueil</p>
						</NuxtLink>
					</li>
					<li class="hover-bordered mt-3 mb-3">
						<NuxtLink to="/portfolio" :active-class="classActive" class="n-link-base">
							<svg class="h7 w-7 transition text-accent-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
							<p class="text-secondary-focus font-bold">Portfolio</p>
						</NuxtLink>
					</li>
					<li class="hover-bordered mt-3 mb-3">
						<NuxtLink to="/about" :active-class="classActive" class="n-link-base">
							<svg class="h7 w-7 transition text-accent-content" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
							<p class="text-secondary-focus font-bold">CV</p>
						</NuxtLink>
					</li>
					<li class="hover-bordered mt-3 mb-3">
						<NuxtLink to="/contact" :active-class="classActive" class="n-link-base">
							<svg xmlns="http://www.w3.org/2000/svg" class="h7 w-7 transition text-accent-content" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<p class="text-secondary-focus font-bold">Contact</p>
						</NuxtLink>
					</li>
				</ul>
			</div>
			<select class="select select-primary w-full max-w-xs" v-model="colorMode.preference">
				<option disabled selected>Theme</option>
				<option v-for="theme of themes" :key="theme">{{ theme }}</option>
			</select>
		</div>
	</aside>
</template>

<script setup>
	const classActive = "active";
	const colorMode = useColorMode();
	const themes = [
		'system',
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter',
	];
</script>