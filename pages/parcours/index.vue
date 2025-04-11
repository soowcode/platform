<template>
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Parcours d'apprentissage
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Choisissez votre voie et développez vos compétences en programmation
          </p>
        </div>
      </div>
    </section>

    <!-- Learning Paths Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filters -->
        <div class="mb-12">
          <div class="flex flex-wrap gap-4">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="selectedCategory = category.id"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </div>

        <!-- Paths Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="path in filteredPaths" 
            :key="path.id" 
            class="path-card group"
          >
            <div class="aspect-w-16 aspect-h-9 mb-4">
              <img :src="path.image" :alt="path.title" class="rounded-lg object-cover">
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-sm font-medium px-3 py-1 rounded-full" :class="getLevelClass(path.level)">
                  {{ path.level }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ path.duration }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ path.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ path.description }}</p>
              <div class="flex items-center gap-4">
                <NuxtLink :to="'/parcours/' + path.id" class="btn-primary">
                  Commencer
                </NuxtLink>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {{ path.students }} étudiantes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const selectedCategory = ref('all')

const categories = [
  { id: 'all', name: 'Tous les parcours' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Fullstack' },
  { id: 'mobile', name: 'Mobile' },
  { id: 'data', name: 'Data Science' }
]

const paths = [
  {
    id: 'frontend-basics',
    title: 'Les bases du Frontend',
    description: 'Apprenez HTML, CSS et JavaScript pour créer des sites web interactifs',
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop&q=80',
    level: 'Débutant',
    duration: '8 semaines',
    category: 'frontend',
    students: 1234
  },
  {
    id: 'react-fundamentals',
    title: 'React.js Fondamentaux',
    description: 'Maîtrisez React.js et créez des applications web modernes',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    level: 'Intermédiaire',
    duration: '10 semaines',
    category: 'frontend',
    students: 856
  },
  {
    id: 'nodejs-express',
    title: 'Node.js avec Express',
    description: 'Développez des APIs REST et des applications backend avec Node.js',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=80',
    level: 'Intermédiaire',
    duration: '12 semaines',
    category: 'backend',
    students: 645
  },
  {
    id: 'python-data-science',
    title: 'Python pour la Data Science',
    description: 'Analysez des données et créez des modèles de machine learning',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=80',
    level: 'Avancé',
    duration: '16 semaines',
    category: 'data',
    students: 432
  },
  {
    id: 'flutter-mobile',
    title: 'Développement Mobile avec Flutter',
    description: 'Créez des applications mobiles natives pour iOS et Android',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    level: 'Intermédiaire',
    duration: '14 semaines',
    category: 'mobile',
    students: 378
  },
  {
    id: 'fullstack-javascript',
    title: 'Fullstack JavaScript',
    description: 'Maîtrisez le développement web de A à Z avec JavaScript',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop&q=80',
    level: 'Avancé',
    duration: '20 semaines',
    category: 'fullstack',
    students: 567
  }
]

const filteredPaths = computed(() => {
  if (selectedCategory.value === 'all') {
    return paths
  }
  return paths.filter(path => path.category === selectedCategory.value)
})

const getLevelClass = (level) => {
  const classes = {
    'Débutant': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Intermédiaire': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Avancé': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  }
  return classes[level]
}
</script>

<style scoped>
.path-card {
  @apply bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow;
}

.btn-primary {
  @apply inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors;
}
</style>