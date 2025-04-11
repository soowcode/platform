<template>
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Ressources d'apprentissage
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Une collection soigneusement sélectionnée pour enrichir votre parcours d'apprentissage
          </p>
        </div>
      </div>
    </section>

    <!-- Resources Grid -->
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
          <div class="mt-4 flex flex-wrap gap-4">
            <button 
              v-for="tag in allTags" 
              :key="tag"
              @click="selectedTags.includes(tag) ? selectedTags = selectedTags.filter(t => t !== tag) : selectedTags.push(tag)"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                selectedTags.includes(tag)
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              ]"
            >
              {{ tag }}
            </button>
          </div>
          <div class="mt-4 flex flex-wrap gap-4">
            <button 
              v-for="level in levels" 
              :key="level.id"
              @click="selectedLevel = level.id"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                selectedLevel === level.id
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              ]"
            >
              {{ level.name }}
            </button>
          </div>
        </div>

        <!-- Resources Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="resource in filteredResources" 
            :key="resource.id" 
            class="resource-card group"
          >
            <div class="aspect-w-16 aspect-h-9 mb-4">
              <img :src="resource.image" :alt="resource.title" class="rounded-lg object-cover">
            </div>
            <div class="p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="text-sm font-medium px-3 py-1 rounded-full" :class="getLevelClass(resource.level)">
                  {{ resource.level }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ resource.type }}</span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ resource.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ resource.description }}</p>
              <div class="flex items-center justify-between">
                <a :href="resource.link" target="_blank" rel="noopener noreferrer" class="btn-primary">
                  Accéder
                </a>
                <div class="flex gap-2">
                  <span 
                    v-for="tag in resource.tags" 
                    :key="tag"
                    class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                  >
                    {{ tag }}
                  </span>
                </div>
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
const selectedLevel = ref('all')
const selectedTags = ref([])

const categories = [
  { id: 'all', name: 'Toutes les ressources' },
  { id: 'tutoriels', name: 'Tutoriels' },
  { id: 'articles', name: 'Articles' },
  { id: 'videos', name: 'Vidéos' },
  { id: 'outils', name: 'Outils' },
  { id: 'documentation', name: 'Documentation' }
]

const levels = [
  { id: 'all', name: 'Tous les niveaux' },
  { id: 'debutant', name: 'Débutant' },
  { id: 'intermediaire', name: 'Intermédiaire' },
  { id: 'avance', name: 'Avancé' }
]

const resources = [
  {
    id: 'mdn-web-docs',
    title: 'MDN Web Docs',
    description: 'Documentation complète pour le développement web',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&auto=format&fit=crop&q=80',
    level: 'Débutant',
    type: 'Documentation',
    category: 'documentation',
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    link: 'https://developer.mozilla.org/'
  },
  {
    id: 'freecodecamp',
    title: 'freeCodeCamp',
    description: 'Apprenez à coder gratuitement avec des projets pratiques',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    level: 'Débutant',
    type: 'Tutoriels',
    category: 'tutoriels',
    tags: ['Web', 'JavaScript', 'Python'],
    link: 'https://www.freecodecamp.org/'
  },
  {
    id: 'web-dev',
    title: 'web.dev',
    description: 'Guides et bonnes pratiques pour le développement web moderne',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    level: 'Intermédiaire',
    type: 'Articles',
    category: 'articles',
    tags: ['Performance', 'PWA', 'Web'],
    link: 'https://web.dev/'
  },
  {
    id: 'fireship',
    title: 'Fireship.io',
    description: 'Tutoriels vidéo rapides sur les technologies modernes',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&auto=format&fit=crop&q=80',
    level: 'Intermédiaire',
    type: 'Vidéos',
    category: 'videos',
    tags: ['JavaScript', 'Firebase', 'Cloud'],
    link: 'https://fireship.io/'
  },
  {
    id: 'github-copilot',
    title: 'GitHub Copilot',
    description: 'Assistant de programmation alimenté par l\'IA',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80',
    level: 'Avancé',
    type: 'Outils',
    category: 'outils',
    tags: ['AI', 'Productivité', 'Code'],
    link: 'https://github.com/features/copilot'
  },
  {
    id: 'system-design-primer',
    title: 'System Design Primer',
    description: 'Guide pour apprendre la conception de systèmes distribués',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    level: 'Avancé',
    type: 'Documentation',
    category: 'documentation',
    tags: ['Architecture', 'Scalabilité', 'Backend'],
    link: 'https://github.com/donnemartin/system-design-primer'
  }
]

const allTags = computed(() => {
  const tags = new Set()
  resources.forEach(resource => {
    resource.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

const filteredResources = computed(() => {
  return resources.filter(resource => {
    const categoryMatch = selectedCategory.value === 'all' || resource.category === selectedCategory.value
    const levelMatch = selectedLevel.value === 'all' || resource.level.toLowerCase() === selectedLevel.value
    const tagsMatch = selectedTags.value.length === 0 || 
      selectedTags.value.every(tag => resource.tags.includes(tag))
    return categoryMatch && levelMatch && tagsMatch
  })
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
.resource-card {
  @apply bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow;
}

.btn-primary {
  @apply inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors;
}
</style>