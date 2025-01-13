<template>
  <header class="bg-white shadow dark:bg-gray-800">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex w-full items-center justify-between py-6">
        <div class="flex items-center">
          <NuxtLink :to="localePath('/')" class="text-2xl font-bold text-gray-900 dark:text-white">
            John Doe
          </NuxtLink>
        </div>
        <div class="ml-10 flex items-center space-x-8">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="localePath(item.href)"
            class="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            {{ $t(item.name) }}
          </NuxtLink>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const navigation = [
  { name: 'nav.home', href: '/' },
  { name: 'nav.about', href: '/about' },
  { name: 'nav.blog', href: '/blog' },
  { name: 'nav.contact', href: '/contact' }
]

const localePath = useLocalePath()
</script>