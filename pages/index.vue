<template>
  <main>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-24 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Construisez votre avenir dans la tech
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Une communauté dédiée à l'autonomisation des femmes dans le domaine de l'informatique
          </p>
          <div class="flex justify-center space-x-4">
            <NuxtLink to="/parcours" class="btn-primary">
              Découvrir les parcours
            </NuxtLink>
            <NuxtLink to="/communaute" class="btn-secondary">
              Rejoindre la communauté
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-heading font-bold text-center text-gray-900 dark:text-white mb-12">
          Pourquoi choisir SoowCode ?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="feature-card">
            <Icon name="ph:graduation-cap-bold" class="w-12 h-12 text-primary-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Parcours personnalisés
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Des formations adaptées à votre niveau et vos objectifs professionnels
            </p>
          </div>
          <div class="feature-card">
            <Icon name="ph:users-bold" class="w-12 h-12 text-primary-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Communauté active
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Échangez avec d'autres femmes passionnées par la technologie
            </p>
          </div>
          <div class="feature-card">
            <Icon name="ph:book-bold" class="w-12 h-12 text-primary-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Ressources de qualité
            </h3>
            <p class="text-gray-600 dark:text-gray-400">
              Accédez à une bibliothèque de contenus soigneusement sélectionnés
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.btn-primary {
  @apply inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors;
}

.btn-secondary {
  @apply inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary-700 bg-primary-100 hover:bg-primary-200 dark:text-primary-400 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors;
}

.feature-card {
  @apply p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow;
}
</style>