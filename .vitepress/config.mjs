import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default {
  title: '我的前端博客',
  description: '前端学习记录',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '前端学习', link: '/guide/frontend' }
    ],
    sidebar: [
      {
        text: '前端学习',
        items: [
          { text: '学习总览', link: '/guide/frontend' },
          { text: 'HTML', link: '/guide/html-basics' },
        ]
      }
    ]
  }
}
