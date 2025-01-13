<template>
  <main class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
        {{ $t('blog.title') }}
      </h1>
      <div class="space-y-16">
        <ContentList :path="`/${$i18n.locale}/blog`" v-slot="{ list }">
          <article v-for="article in list" :key="article._path" class="flex max-w-xl flex-col items-start">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="article.date" class="text-gray-500">
                {{ new Date(article.date).toLocaleDateString() }}
              </time>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <NuxtLink :to="localePath(article._path)">
                  {{ article.title }}
                </NuxtLink>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {{ article.description }}
              </p>
            </div>
          </article>
        </ContentList>
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Sales Management insights and industry trends' }
  ]
})
</script>