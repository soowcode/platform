<template>
  <main class="py-24">
    <!-- Hero Section -->
    <section class="relative pb-16 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            À propos de SoowCode
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Une initiative pour transformer le paysage technologique en Afrique
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Notre Mission
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            SoowCode a été créée avec une vision claire : autonomiser les femmes dans le domaine de la technologie en Afrique. Notre mission est de briser les barrières qui limitent l'accès des femmes aux carrières technologiques et de créer un écosystème inclusif où chaque talent peut s'épanouir.
          </p>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-heading font-bold text-center text-gray-900 dark:text-white mb-12">
          Nos Valeurs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <Icon name="ph:heart-bold" class="w-12 h-12 text-primary-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Inclusion</h3>
            <p class="text-gray-600 dark:text-gray-300">Nous créons un environnement où chaque femme se sent bienvenue et valorisée, indépendamment de son niveau d'expérience.</p>
          </div>
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <Icon name="ph:lightbulb-bold" class="w-12 h-12 text-primary-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h3>
            <p class="text-gray-600 dark:text-gray-300">Nous encourageons la créativité et l'innovation pour résoudre les défis technologiques de demain.</p>
          </div>
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
            <Icon name="ph:users-bold" class="w-12 h-12 text-primary-600 mb-4" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Communauté</h3>
            <p class="text-gray-600 dark:text-gray-300">Nous construisons une communauté forte où l'entraide et le partage de connaissances sont au cœur de notre approche.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Notre Impact
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Depuis notre création, nous avons accompagné des centaines de femmes dans leur parcours technologique, contribuant ainsi à créer une nouvelle génération de leaders dans le domaine du numérique en Afrique.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div class="text-gray-600 dark:text-gray-300">Apprenantes</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div class="text-gray-600 dark:text-gray-300">Mentors</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">20+</div>
              <div class="text-gray-600 dark:text-gray-300">Partenaires</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary-600 mb-2">10</div>
              <div class="text-gray-600 dark:text-gray-300">Pays</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-primary-50 dark:bg-gray-800">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Rejoignez l'aventure
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ensemble, construisons un avenir technologique plus inclusif en Afrique.
          </p>
          <NuxtLink to="/communaute" class="btn-primary">
            Rejoindre la communauté
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  title: 'À propos - SoowCode',
  description: 'Découvrez l\'histoire, la mission et les valeurs de SoowCode, une initiative pour l\'autonomisation des femmes dans la tech en Afrique.'
})
</script>