<template>
  <main class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
    <article class="prose lg:prose-xl mx-auto dark:prose-invert">
      <ContentDoc :path="`/${$i18n.locale}/blog/${route.params.slug}`" v-slot="{ doc }">
        <ContentRenderer :value="doc" />
      </ContentDoc>
    </article>
  </main>
</template>

<script setup>
const route = useRoute()
const { locale } = useI18n()

useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Sales Management insights and industry trends' }
  ]
})
</script>