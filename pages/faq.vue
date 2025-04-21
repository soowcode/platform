<template>
  <main class="pt-20 pb-12">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 py-12">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-3 animate-fade-in">
            Foire aux questions
          </h1>
          <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-delay">
            Trouvez rapidement des réponses à vos questions
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-6">
          <div v-for="(category, index) in faqCategories" :key="index" class="animate-fade-in-up">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ category.title }}</h2>
            <div class="space-y-4">
              <div v-for="(item, itemIndex) in category.items" :key="itemIndex"
                class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <button
                  @click="item.isOpen = !item.isOpen"
                  class="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span class="text-lg font-medium text-gray-900 dark:text-white">{{ item.question }}</span>
                  <Icon
                    :name="item.isOpen ? 'ph:minus-bold' : 'ph:plus-bold'"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300"
                    :class="{ 'transform rotate-180': item.isOpen }"
                  />
                </button>
                <div
                  v-show="item.isOpen"
                  class="px-6 pb-4 text-gray-600 dark:text-gray-300"
                >
                  <p>{{ item.answer }}</p>
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
const faqCategories = ref([
  {
    title: 'À propos de SoowCode',
    items: [
      {
        question: 'Qu\'est-ce que SoowCode ?',
        answer: 'SoowCode est une plateforme d\'apprentissage dédiée au développement web et à la programmation, offrant des ressources de qualité et une communauté active pour accompagner votre progression.',
        isOpen: false
      },
      {
        question: 'Les ressources sont-elles gratuites ?',
        answer: 'La majorité des ressources sur SoowCode sont gratuites. Certains contenus premium peuvent nécessiter un abonnement pour un accès complet.',
        isOpen: false
      }
    ]
  },
  {
    title: 'Parcours d\'apprentissage',
    items: [
      {
        question: 'Par où commencer ?',
        answer: 'Nous recommandons de commencer par notre parcours "Fondamentaux du développement web" qui couvre les bases essentielles. Vous pouvez ensuite progresser vers des sujets plus avancés selon vos intérêts.',
        isOpen: false
      },
      {
        question: 'Puis-je suivre plusieurs parcours en même temps ?',
        answer: 'Oui, vous pouvez suivre plusieurs parcours simultanément. Cependant, nous conseillons de se concentrer sur un parcours à la fois pour une meilleure progression.',
        isOpen: false
      }
    ]
  },
  {
    title: 'Communauté',
    items: [
      {
        question: 'Comment rejoindre la communauté ?',
        answer: 'Vous pouvez rejoindre notre communauté en vous inscrivant sur la plateforme. Vous aurez accès à nos forums de discussion, événements en ligne et groupes d\'entraide.',
        isOpen: false
      },
      {
        question: 'Comment contribuer au contenu ?',
        answer: 'Les membres de la communauté peuvent proposer du contenu, partager leurs expériences et contribuer aux discussions. Contactez-nous pour plus d\'informations sur la contribution.',
        isOpen: false
      }
    ]
  }
])
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
</style>