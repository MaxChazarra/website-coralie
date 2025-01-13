<template>
  <footer class="bg-gray-50 mt-auto dark:bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          © {{ new Date().getFullYear() }} {{ $t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>