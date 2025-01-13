<template>
  <div class="relative inline-block text-left">
    <button type="button"
      class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      @click="isOpen = !isOpen">
      {{ currentLocale.name }}
    </button>

    <div v-if="isOpen"
      class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div class="py-1">
        <button v-for="locale in availableLocales" :key="locale.code"
          class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100" @click="switchLanguage(locale.code)">
          {{ locale.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const isOpen = ref(false)

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const currentLocale = computed(() => {
  return locales.value.find(i => i.code === locale.value)
})

const switchLanguage = (code) => {
  const path = switchLocalePath(code)
  if (path) {
    router.push(path)
  }
  isOpen.value = false
}
</script>