<template>
  <main>
    <div class="relative isolate">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {{ $t('home.title') }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            {{ $t('home.subtitle') }}
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <NuxtLink :to="localePath('/contact')"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">
              {{ $t('home.contact') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {{ $t('home.latest_posts') }}
          </h2>
          <div class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
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
      </div>
    </div>
  </main>
</template>

<script setup>
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Professional Sales Manager Portfolio - Expertise in driving revenue growth and team leadership' }
  ]
})
const localePath = useLocalePath()
</script>