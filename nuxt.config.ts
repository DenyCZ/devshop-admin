export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
        link: [
            {
                id: 'theme-css',
                rel: 'stylesheet',
                type: 'text/css',
                href: '/themes/lara-light-indigo/theme.css'
            }
        ]
    }
  },  
  modules: [
    'nuxt-primevue',
    '@vee-validate/nuxt',
  ],
  components: {
    global: true,
    dirs: ['~/components'],
  },
  primevue: {
    cssLayerOrder: "primevue",
    options: {
      ripple: true,
    }
  },
  css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', 'primevue/resources/primevue.min.css', '@/assets/main.scss']
})
