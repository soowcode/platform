<template>
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 py-24">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl sm:text-6xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Ressources d'apprentissage
          </h1>
          <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">
            Une collection soigneusement sélectionnée pour enrichir votre parcours d'apprentissage
          </p>
          <div class="relative w-full max-w-2xl mx-auto animate-fade-in-delay-2">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="ph:magnifying-glass" class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Rechercher une ressource..."
              class="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Resources Grid -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Filters -->
        <div class="mb-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 animate-fade-in-up">
          <div class="space-y-6">
            <!-- Categories -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Catégories</h3>
              <div class="flex flex-wrap gap-3">
                <button 
                  v-for="category in categories" 
                  :key="category.id"
                  @click="selectedCategory = category.id"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105',
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  ]"
                >
                  <div class="flex items-center space-x-2">
                    <Icon :name="getCategoryIcon(category.id)" class="w-4 h-4" />
                    <span>{{ category.name }}</span>
                  </div>
                </button>
              </div>
            </div>

            <!-- Tags -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies</h3>
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="tag in allTags" 
                  :key="tag"
                  @click="selectedTags.includes(tag) ? selectedTags = selectedTags.filter(t => t !== tag) : selectedTags.push(tag)"
                  :class="[
                    'px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105',
                    selectedTags.includes(tag)
                      ? 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  ]"
                >
                  {{ tag }}
                </button>
              </div>
            </div>

            <!-- Levels -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Niveau</h3>
              <div class="flex flex-wrap gap-3">
                <button 
                  v-for="level in levels" 
                  :key="level.id"
                  @click="selectedLevel = level.id"
                  :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105',
                    selectedLevel === level.id
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  ]"
                >
                  <div class="flex items-center space-x-2">
                    <Icon :name="getLevelIcon(level.id)" class="w-4 h-4" />
                    <span>{{ level.name }}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Resources Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="resource in filteredResources" 
            :key="resource.id" 
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-fade-in-up"
          >
            <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
              <img 
                :src="resource.image" 
                :alt="resource.title" 
                class="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-4">
                <span 
                  class="text-sm font-medium px-3 py-1 rounded-full flex items-center space-x-1 transition-colors duration-300" 
                  :class="getLevelClass(resource.level)"
                >
                  <Icon :name="getLevelIcon(resource.level)" class="w-4 h-4" />
                  <span>{{ resource.level }}</span>
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <Icon :name="getTypeIcon(resource.type)" class="w-4 h-4 mr-1" />
                  {{ resource.type }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{{ resource.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">{{ resource.description }}</p>
              <div class="flex flex-col space-y-4">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in resource.tags" 
                    :key="tag"
                    class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    {{ tag }}
                  </span>
                </div>
                <a 
                  :href="resource.link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <span>Accéder</span>
                  <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
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
const searchQuery = ref('')

const categories = [
  { id: 'all', name: 'Toutes les ressources' },
  { id: 'parcours', name: 'Parcours' },
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

const getCategoryIcon = (categoryId) => {
  const icons = {
    'all': 'ph:grid-four',
    'parcours': 'ph:graduation-cap',
    'tutoriels': 'ph:book-open',
    'articles': 'ph:article',
    'videos': 'ph:video-camera',
    'outils': 'ph:wrench',
    'documentation': 'ph:file-doc'
  }
  return icons[categoryId] || 'ph:question'
}

const getLevelIcon = (levelId) => {
  const icons = {
    'all': 'ph:list',
    'debutant': 'ph:star',
    'intermediaire': 'ph:star-half',
    'avance': 'ph:star-fill'
  }
  return icons[levelId] || 'ph:question'
}

const getTypeIcon = (type) => {
  const icons = {
    'Parcours': 'ph:graduation-cap',
    'Tutoriel': 'ph:book-open',
    'Article': 'ph:article',
    'Vidéo': 'ph:video-camera',
    'Outil': 'ph:wrench',
    'Documentation': 'ph:file-doc'
  }
  return icons[type] || 'ph:question'
}

const resources = [
  {
    id: 'frontend-basics',
    title: 'Les bases du Frontend',
    description: 'Apprenez HTML, CSS et JavaScript pour créer des sites web interactifs',
    image: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop&q=80',
    level: 'Débutant',
    type: 'Parcours',
    category: 'parcours',
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    link: '/parcours/frontend-basics'
  },
  {
    id: 'react-fundamentals',
    title: 'React.js Fondamentaux',
    description: 'Maîtrisez React.js et créez des applications web modernes',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80',
    level: 'Intermédiaire',
    type: 'Parcours',
    category: 'parcours',
    tags: ['React', 'JavaScript', 'Frontend'],
    link: '/parcours/react-fundamentals'
  },
  {
    id: 'nodejs-express',
    title: 'Node.js avec Express',
    description: 'Développez des APIs REST et des applications backend avec Node.js',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=80',
    level: 'Intermédiaire',
    type: 'Parcours',
    category: 'parcours',
    tags: ['Node.js', 'Express', 'Backend'],
    link: '/parcours/nodejs-express'
  },
  {
    id: 'python-data-science',
    title: 'Python pour la Data Science',
    description: 'Analysez des données et créez des modèles de machine learning',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&auto=format&fit=crop&q=80',
    level: 'Avancé',
    type: 'Parcours',
    category: 'parcours',
    tags: ['Python', 'Data Science', 'Machine Learning'],
    link: '/parcours/python-data-science'
  },
  {
    id: 'flutter-mobile',
    title: 'Développement Mobile avec Flutter',
    description: 'Créez des applications mobiles natives pour iOS et Android',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    level: 'Intermédiaire',
    type: 'Parcours',
    category: 'parcours',
    tags: ['Flutter', 'Mobile', 'Cross-platform'],
    link: '/parcours/flutter-mobile'
  },
  {
    id: 'fullstack-javascript',
    title: 'Fullstack JavaScript',
    description: 'Maîtrisez le développement web de A à Z avec JavaScript',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop&q=80',
    level: 'Avancé',
    type: 'Parcours',
    category: 'parcours',
    tags: ['JavaScript', 'Frontend', 'Backend', 'Fullstack'],
    link: '/parcours/fullstack-javascript'
  },
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

.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(128, 128, 128, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(128, 128, 128, 0.1) 1px, transparent 1px);
  background-size: 24px 24px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.6s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.6s ease-out 0.4s forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}
</style>