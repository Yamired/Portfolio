<template #nav>
	<aside class="xl:w-2/12 w-3/12 h-screen" aria-label="Sidebar">
		<div class="overflow-y-auto h-screen border-r-2 border-primary bg-neutral p-4">
			<div class="flex flex-col justify-around h-3/6">
				<div class="flex justify-center">
					<div class="card w-96 bg-base-100 shadow-xl">
						<figure class="px-3 pt-3">
							<img class="rounded-full object-cover w-28 h-28 lg:w-36 lg:h-36 border-2 border-primary   
											transition ease-in-out duration-700 delay-150 hover:shadow-lg hover:border-secondary hover:shadow-primary-content hover:-translate-y-1 hover:scale-105" src="profile-pic.jpg"/>
						</figure>
						<div class="card-body items-center text-center p-4">
							<span class="card-title title-family tracking-widest 2xl:text-2xl xl:text-xl md:text-lg sm:text-md leading-10 whitespace-nowrap text-primary">Corentin Derimay</span>
							<Logo class="h-10"></Logo>
						</div>
					</div>
				</div>
				<div>
					<ul class="menu bg-base-100 p-2 rounded-box">
						<li class="hover-bordered mt-3 mb-3">
							<NuxtLink to="/" :active-class="classActive" class="n-link-base">
								<HomeIcon class="h7 w-7 transition"/>
								<p class="font-bold">Accueil</p>
							</NuxtLink>
						</li>
						<li class="hover-bordered mt-3 mb-3">
							<NuxtLink to="/portfolio" :active-class="classActive" class="n-link-base">
								<BriefcaseIcon class="h7 w-7 transition"/>
								<p class="font-bold">Portfolio</p>
							</NuxtLink>
						</li>
						<li class="hover-bordered mt-3 mb-3">
							<NuxtLink to="/about" :active-class="classActive" class="n-link-base">
								<InformationCircleIcon class="h7 w-7 transition"/>
								<p class="font-bold">À propos</p>
							</NuxtLink>
						</li>
						<li class="hover-bordered mt-3 mb-3">
							<NuxtLink to="/contact" :active-class="classActive" class="n-link-base">
								<MailIcon class="h7 w-7 transition"/>
								<p class="font-bold">Contact</p>
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
			<div class="flex flex-col justify-end h-3/6">
				<select class="select select-primary w-full" v-model="colorMode.preference">
					<option disabled selected>Theme</option>
					<option v-for="theme of themes" :key="theme">{{ theme }}</option>
				</select>
			</div>
		</div>
	</aside>
</template>

<style scoped>
	.title-family {
		font-family: Courgette, cursive;
	}
</style>

<script setup>

	import { BriefcaseIcon, InformationCircleIcon, HomeIcon, MailIcon } from '@heroicons/vue/outline'

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