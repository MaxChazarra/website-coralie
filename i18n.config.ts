export default defineI18nConfig(() => {
  return {
    legacy: false,
    locales: [
        { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
        { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' }
    ],
    defaultLocale: 'en',
    langDir: '../locales',
    strategy: 'prefix',
  }
})