<template>
  <main class="pt-16 pb-12">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 py-16">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            Contactez-nous
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-delay">
            Une question ? N'hésitez pas à nous contacter
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Contact Form -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 transform transition-all duration-300 hover:shadow-xl animate-fade-in-up">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envoyez-nous un message</h2>
              <form @submit.prevent="submitForm" class="space-y-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Nom complet</label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Sujet</label>
                  <select
                    id="subject"
                    v-model="formData.subject"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="general">Question générale</option>
                    <option value="technical">Support technique</option>
                    <option value="partnership">Partenariat</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    rows="6"
                    required
                    class="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-xl transform transition-all duration-300 hover:scale-102 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="!isSubmitting">Envoyer le message</span>
                  <span v-else class="flex items-center justify-center">
                    <Icon name="ph:circle-notch" class="w-5 h-5 animate-spin mr-2" />
                    Envoi en cours...
                  </span>
                </button>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="space-y-10">
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 transform transition-all duration-300 hover:shadow-xl animate-fade-in-up">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Informations de contact</h2>
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <Icon name="ph:envelope" class="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h3 class="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                      <p class="text-gray-600 dark:text-gray-300">contact@soowcode.com</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-4">
                    <Icon name="ph:map-pin" class="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h3 class="text-lg font-medium text-gray-900 dark:text-white">Adresse</h3>
                      <p class="text-gray-600 dark:text-gray-300">[Votre adresse]</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 transform transition-all duration-300 hover:shadow-xl animate-fade-in-up">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Suivez-nous</h2>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                    <Icon name="ph:twitter-logo" class="w-8 h-8" />
                  </a>
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                    <Icon name="ph:github-logo" class="w-8 h-8" />
                  </a>
                  <a href="#" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
                    <Icon name="ph:linkedin-logo" class="w-8 h-8" />
                  </a>
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
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  try {
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000))
    // Réinitialiser le formulaire
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    alert('Message envoyé avec succès !')
  } catch (error) {
    alert('Une erreur est survenue lors de l\'envoi du message.')
  } finally {
    isSubmitting.value = false
  }
}
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