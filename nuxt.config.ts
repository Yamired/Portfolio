import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    colorMode: {
        preference: 'system', // thème par défaut
        dataValue: 'theme', // propriété data-theme --> <html> tag
        classSuffix: '',
    },
    css: [
        '@/assets/css/main.css',
    ],
})
