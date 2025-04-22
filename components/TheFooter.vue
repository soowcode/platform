<template>
  <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">SoowCode</h3>
          <p class="text-gray-600 dark:text-gray-400">Autonomiser les femmes dans le domaine de l'informatique</p>
        </div>
        
        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/ressources" class="footer-link">Ressources</NuxtLink></li>
            <li><NuxtLink to="/blog" class="footer-link">Blog</NuxtLink></li>
            <li><NuxtLink to="/communaute" class="footer-link">Communauté</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase mb-4">Ressources</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/faq" class="footer-link">FAQ</NuxtLink></li>
            <li><NuxtLink to="/contact" class="footer-link">Contact</NuxtLink></li>
            <li><NuxtLink to="/mentions-legales" class="footer-link">Mentions légales</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white uppercase mb-4">Suivez-nous</h4>
          <div class="flex space-x-4">
            <a href="https://x.com/Sow34979868" class="social-link"><Icon name="ph:twitter-logo-bold" /></a>
            <a href="https://www.linkedin.com/in/ousmane-soowcode/" class="social-link"><Icon name="ph:linkedin-logo-bold" /></a>
            <a href="#" class="social-link"><Icon name="ph:instagram-logo-bold" /></a>
            <a href="#" class="social-link"><Icon name="ph:youtube-logo-bold" /></a>
          </div>
        </div>
      </div>
      
      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p class="text-center text-gray-500 dark:text-gray-400">
          © {{ new Date().getFullYear() }} SoowCode. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors;
}

.social-link {
  @apply text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors;
}

.social-link svg {
  @apply w-6 h-6;
}
</style>