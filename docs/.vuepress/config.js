module.exports = {
  title: '前端知识库@敲代码的小提琴手',
  description: '前端er的面试必备知识——前端算法与前端面试题！',
  theme: 'reco',
  base: '/frontend-knowledge-base/',
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    nav: [
        { text: '首页', link: '/' },
        { 
            text: 'more about @敲代码的小提琴手', 
            items: [
                { text: 'myGithub', link: 'https://github.com/FangzhouSu' },
                { text: 'myJuejin', link: 'https://juejin.cn/user/18064101621133' }
            ]
        }
    ],
    sidebar: [
      {
          title: 'Hey!This is 敲代码的小提琴手!',
          path: '/',
          collapsable: false, // 不折叠
          children: [
              { title: "学前必读", path: "/" }
          ]
      },
      {
        title: "前端er必会的数据结构与算法",
        path: '/handbook/start',
        collapsable: false, // 不折叠
        children: [
          { title: "前端必会数据结构", path: "/handbook/struct" },
          { title: "前端必会算法技巧", path: "/handbook/algorithm" },
          { title: "推荐刷题内容", path: "/handbook/leetcode" }
        ],
      },
      {
        title: "前端校招er必会的前端知识点",
        path: '/study-everyday/study-everyday',
        collapsable: false, // 不折叠
        children: [
          { title: "22/1的每日一题", path: "/study-everyday/22-1-study" },
        ],
      }
    ]
  },
}