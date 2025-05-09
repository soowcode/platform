export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    buildAssetsDir: 'assets',
    head: {
      title: 'SoowCode - Autonomiser les femmes dans la tech',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'SoowCode est une plateforme éducative dédiée à l\'autonomisation des femmes dans le domaine de l\'informatique.'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },
  googleFonts: {
    families: {
      'Inter': [300, 400, 500, 600, 700],
      'Poppins': [600, 700]
    }
  }
})