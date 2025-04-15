<template>
  <main class="pt-24 pb-16">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 py-24">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl sm:text-6xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Communauté
          </h1>
          <p class="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delay">
            Rejoignez une communauté dynamique de développeurs passionnés
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg animate-fade-in-up">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{{ stats.members }}</div>
            <div class="text-gray-600 dark:text-gray-300">Membres actifs</div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg animate-fade-in-up">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{{ stats.events }}</div>
            <div class="text-gray-600 dark:text-gray-300">Événements organisés</div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg animate-fade-in-up">
            <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{{ stats.projects }}</div>
            <div class="text-gray-600 dark:text-gray-300">Projets collaboratifs</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="py-12 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Événements à venir</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="event in upcomingEvents" :key="event.id" class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-fade-in-up">
            <div class="relative aspect-w-16 aspect-h-9 overflow-hidden">
              <img :src="event.image" :alt="event.title" class="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <div class="text-sm font-medium">{{ event.date }}</div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ event.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4">{{ event.description }}</p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <Icon name="ph:users" class="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span class="text-sm text-gray-500 dark:text-gray-400">{{ event.participants }} participants</span>
                </div>
                <button class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-colors duration-300">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Active Members Section -->
    <section class="py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Membres actifs</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="member in activeMembers" :key="member.id" class="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg animate-fade-in-up transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <div class="relative w-24 h-24 mx-auto mb-4">
              <img :src="member.avatar" :alt="member.name" class="rounded-full object-cover w-full h-full">
              <div class="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full p-2">
                <Icon :name="member.badgeIcon" class="w-4 h-4" />
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1">{{ member.name }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ member.role }}</p>
            <div class="flex justify-center space-x-2">
              <div v-for="badge in member.badges" :key="badge.name" class="tooltip" :title="badge.name">
                <Icon :name="badge.icon" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Community Section -->
    <section class="py-12 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Rejoignez notre communauté</h2>
        <p class="text-xl mb-8 opacity-90">Participez à des événements, partagez vos connaissances et grandissez avec nous</p>
        <button class="px-8 py-4 bg-white text-primary-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
          Devenir membre
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
const stats = {
  members: '500+',
  events: '50+',
  projects: '30+'
}

const upcomingEvents = [
  {
    id: 1,
    title: 'Workshop Vue.js Avancé',
    description: 'Apprenez les concepts avancés de Vue.js avec des experts',
    date: '15 Mars 2024',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    participants: 45
  },
  {
    id: 2,
    title: 'Hackathon Innovation Web',
    description: 'Créez des solutions innovantes en 48 heures',
    date: '22 Mars 2024',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&auto=format&fit=crop&q=80',
    participants: 120
  },
  {
    id: 3,
    title: 'Conférence DevOps',
    description: 'Les meilleures pratiques DevOps pour 2024',
    date: '5 Avril 2024',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80',
    participants: 75
  }
]

const activeMembers = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'Développeuse Full Stack',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80',
    badgeIcon: 'ph:star-fill',
    badges: [
      { name: 'Top Contributeur', icon: 'ph:trophy' },
      { name: 'Expert Vue.js', icon: 'ph:certificate' }
    ]
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    role: 'DevOps Engineer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    badgeIcon: 'ph:rocket',
    badges: [
      { name: 'Mentor', icon: 'ph:users' },
      { name: 'Innovation', icon: 'ph:lightbulb' }
    ]
  },
  {
    id: 3,
    name: 'Julie Bernard',
    role: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=80',
    badgeIcon: 'ph:paint-brush',
    badges: [
      { name: 'Design Expert', icon: 'ph:palette' },
      { name: 'Créativité', icon: 'ph:sparkle' }
    ]
  },
  {
    id: 4,
    name: 'Lucas Petit',
    role: 'Backend Developer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=80',
    badgeIcon: 'ph:code',
    badges: [
      { name: 'Performance', icon: 'ph:chart-line-up' },
      { name: 'Sécurité', icon: 'ph:shield-check' }
    ]
  }
]
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

.animate-fade-in-up {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.tooltip {
  position: relative;
}

.tooltip:hover::after {
  content: attr(title);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 8px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 10;
}
</style>