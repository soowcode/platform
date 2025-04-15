<template>
  <header class="fixed w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 z-50">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <NuxtLink to="/" class="flex items-center">
          <span class="text-2xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            SoowCode
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/ressources" class="nav-link">Ressources</NuxtLink>
          <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
          <NuxtLink to="/communaute" class="nav-link">Communauté</NuxtLink>
          <NuxtLink to="/about" class="nav-link">À propos</NuxtLink>
          <button @click="toggleColorMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <Icon :name="colorMode.value === 'dark' ? 'ph:sun-bold' : 'ph:moon-bold'" class="w-5 h-5 text-gray-700 dark:text-white" />
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2">
          <Icon :name="isMenuOpen ? 'ph:x-bold' : 'ph:list-bold'" class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <NuxtLink to="/ressources" class="mobile-nav-link">Ressources</NuxtLink>
          <NuxtLink to="/blog" class="mobile-nav-link">Blog</NuxtLink>
          <NuxtLink to="/communaute" class="mobile-nav-link">Communauté</NuxtLink>
          <NuxtLink to="/about" class="mobile-nav-link">À propos</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const colorMode = useColorMode()
const isMenuOpen = ref(false)

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors;
}

.mobile-nav-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors;
}
</style>