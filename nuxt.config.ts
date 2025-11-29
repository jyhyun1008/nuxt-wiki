// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms'
  ],

  devtools: {
    enabled: true
  },
  router: {
    options: {
      strict: false
    }
  },

  css: ['~/assets/css/main.css'],

  content: {
    documentDriven: {
      trailingSlash: false
    },
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  compatibilityDate: '2024-07-11',
  routeRules: {
    '/**': { prerender: true }
  },
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      failOnError: false,
    }
  },
  ssr: true,
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  llms: {
    domain: 'https://wiki.howeverina.studio/',
    title: '오버필드 비공식 위키',
    description: '느긋하게 게임을 진행하는 유저가 플레이 중 알게 된 정보를 바탕으로 작성하는 위키',
    full: {
      title: '오버필드 비공식 위키',
      description: '느긋하게 게임을 진행하는 유저가 플레이 중 알게 된 정보를 바탕으로 작성하는 위키'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/essentials%' }
        ]
      }
    ]
  }
})
