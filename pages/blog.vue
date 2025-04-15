<template>
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 py-24">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl sm:text-6xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Blog
          </h1>
          <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">
            Découvrez nos derniers articles, tutoriels et actualités
          </p>
          <div class="relative w-full max-w-2xl mx-auto animate-fade-in-delay-2">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name="ph:magnifying-glass" class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Rechercher un article..."
              class="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Grid -->
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
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
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
          </div>
        </div>

        <!-- Articles Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.id" 
            class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-fade-in-up"
          >
            <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
              <img 
                :src="post.image" 
                :alt="post.title" 
                class="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-4">
                <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <Icon name="ph:calendar" class="w-4 h-4 mr-1" />
                  {{ post.date }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <Icon name="ph:clock" class="w-4 h-4 mr-1" />
                  {{ post.readTime }} min
                </span>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{{ post.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">{{ post.excerpt }}</p>
              <div class="flex flex-col space-y-4">
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in post.tags" 
                    :key="tag"
                    class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    {{ tag }}
                  </span>
                </div>
                <NuxtLink 
                  :to="post.slug" 
                  class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <span>Lire l'article</span>
                  <Icon name="ph:arrow-right-bold" class="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const selectedCategory = ref('all')
const selectedTags = ref([])
const searchQuery = ref('')

const categories = [
  { id: 'all', name: 'Tous les articles' },
  { id: 'tutorials', name: 'Tutoriels' },
  { id: 'news', name: 'Actualités' },
  { id: 'tips', name: 'Astuces' },
  { id: 'case-studies', name: 'Études de cas' }
]

const getCategoryIcon = (categoryId) => {
  const icons = {
    'all': 'ph:grid-four',
    'tutorials': 'ph:book-open',
    'news': 'ph:newspaper',
    'tips': 'ph:lightbulb',
    'case-studies': 'ph:chart-line-up'
  }
  return icons[categoryId] || 'ph:question'
}

const posts = [
  {
    id: 1,
    title: 'Les meilleures pratiques pour le développement Vue.js en 2024',
    excerpt: 'Découvrez les dernières tendances et bonnes pratiques pour développer des applications Vue.js modernes et performantes.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80',
    date: '15 Jan 2024',
    readTime: 8,
    category: 'tutorials',
    tags: ['Vue.js', 'JavaScript', 'Frontend'],
    slug: '/blog/vue-best-practices-2024'
  },
  {
    id: 2,
    title: 'Introduction à Nuxt 3 et au SSR',
    excerpt: 'Un guide complet pour comprendre et mettre en place le Server Side Rendering avec Nuxt 3.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    date: '10 Jan 2024',
    readTime: 12,
    category: 'tutorials',
    tags: ['Nuxt.js', 'SSR', 'Performance'],
    slug: '/blog/nuxt-3-ssr-guide'
  },
  {
    id: 3,
    title: 'Comment optimiser les performances de votre site web',
    excerpt: 'Techniques et outils pour améliorer la vitesse et les performances de votre application web.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    date: '5 Jan 2024',
    readTime: 10,
    category: 'tips',
    tags: ['Performance', 'Optimisation', 'Web'],
    slug: '/blog/web-performance-optimization'
  }
]

const allTags = computed(() => {
  const tags = new Set()
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

const filteredPosts = computed(() => {
  return posts.filter(post => {
    const categoryMatch = selectedCategory.value === 'all' || post.category === selectedCategory.value
    const tagsMatch = selectedTags.value.length === 0 || 
      selectedTags.value.every(tag => post.tags.includes(tag))
    const searchMatch = !searchQuery.value || 
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    return categoryMatch && tagsMatch && searchMatch
  })
})
</script>

<style scoped>
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