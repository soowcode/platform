<template>
  <main class="pt-20 pb-12">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 py-12">
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-3xl sm:text-4xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-3 animate-fade-in">
            Mentions légales
          </h1>
          <p class="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-delay">
            Informations légales et conditions d'utilisation
          </p>
        </div>
      </div>
    </section>

    <!-- Legal Content -->
    <section class="py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Éditeur du site</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              SoowCode<br>
              [Adresse]<br>
              Email : contact@soowcode.com
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Hébergement</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Le site SoowCode est hébergé par :<br>
              [Nom de l'hébergeur]<br>
              [Adresse de l'hébergeur]
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Propriété intellectuelle</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute reproduction ou représentation, totale ou partielle, du site ou de l'un des éléments qui le composent, sans l'autorisation expresse de SoowCode, est interdite et constituerait une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Protection des données personnelles</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Conformément à la loi Informatique et Libertés et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Pour exercer ces droits, vous pouvez nous contacter à l'adresse : contact@soowcode.com
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cookies</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Le site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur le site, vous acceptez l'utilisation de cookies conformément à notre politique de confidentialité.
            </p>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Limitation de responsabilité</h2>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              SoowCode ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder. Le contenu du site est fourni à titre informatif et n'engage pas la responsabilité de SoowCode.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

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