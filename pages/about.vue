<template>
  <main class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        {{ $t('about.title') }}
      </h1>
      <div class="prose">
        <p class="text-lg text-gray-600 mb-6">{{ $t('about.intro') }}</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-4">{{ $t('about.experience.title') }}</h2>
        <ul class="space-y-4">
          <li v-for="(item, index) in $t('about.experience.items')" :key="index" class="text-gray-600">
            {{ item }}
          </li>
        </ul>

        <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-4">{{ $t('about.skills.title') }}</h2>
        <ul class="space-y-4">
          <li v-for="(item, index) in $t('about.skills.items')" :key="index" class="text-gray-600">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'Learn more about my experience and expertise in sales management' }
  ]
})
</script>