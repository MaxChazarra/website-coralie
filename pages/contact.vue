<template>
  <main class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
        {{ $t('contact.title') }}
      </h1>
      <p class="text-lg text-gray-600 mb-12">{{ $t('contact.intro') }}</p>

      <form class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">{{ $t('contact.form.name') }}</label>
          <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">{{ $t('contact.form.email') }}</label>
          <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">{{ $t('contact.form.message') }}</label>
          <textarea id="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
        </div>

        <button type="submit" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">
          {{ $t('contact.form.submit') }}
        </button>
      </form>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Get in touch with me to discuss sales management opportunities' }
  ]
})
</script>