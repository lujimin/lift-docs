export default ({
  lang: 'zh-CN',
  title: '查尔斯的知识库',
  description: '个人知识库，记录 & 分享个人碎片化、结构化、体系化的知识内容。',

  lastUpdated: true, // 启用最后更新时间

  // <head>设置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],

  themeConfig: {
    logo: '/logo.jpg',
    lastUpdatedText: '最后更新时间', // 最后更新时间文本
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/Charles7c/charles7c.github.io/edit/main/repos/:path',
      text: '在 GitHub 上编辑此页面'
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Charles7c/charles7c.github.io' }
    ],

    // 版权标识
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Charles7c'
    },

    // 导航栏
    nav: nav(),

    // 侧边栏
    sidebar: {
     '/issues/': sidebarIssues()
    }
  }
})

function nav() {
  return [
    {
      text: 'Bug万象集',
      link: '/issues/index'
    }
  ]
}

function sidebarIssues() {
  return [
    {
      items: [
        { text: 'JavaScript 无法存储 Java  Long 类型数据问题', link: '/issues/2022/01/JavaScript 无法存储 Java  Long 类型数据问题' }
      ]
    }
  ]
}
