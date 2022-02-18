module.exports = {
  theme: '',
  title: 'Jack-ui',
  description: 'jack-ui，一套个人独立开发的基于 Vue 2.0 的桌面端组件库',
  base: '/jack-ui/',
  port: '8080',
  themeConfig: {
    nav: [ // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/comps/'
      },
      {
        text: 'gitee',
        link: 'https://gitee.com/jackbrens'
      }
    ],
    sidebar: [ // 配置侧边栏部分
      {
        title: '入门',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/comps/'
        ]
      },
      {
        title: '组件',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/comps/Button/Button.md',
          '/comps/Input/Input.md',
          '/comps/Radio/Radio.md',
          '/comps/Switch/Switch.md',
          '/comps/Checkbox/Checkbox.md',
          '/comps/Dialog/Dialog.md',
          '/comps/Form/Form.md'
        ]
      }
    ]
  },
  head: [],
  plugins: ['demo-container', 'fulltext-search'],  // 配置插件
  markdown: {}
}
