module.exports = {
    base: '/website-vuepress/',
    // title: '程序员35',
    title: '网站的标题',
    // description: '关注微信公众号【程序员35】，获取最新技术干货',
    description: '网站的描述',
    head: [
        ['link', {rel: 'icon', href: '/images/logo.jpg'}]
    ],
    // theme: 'vuepress-theme-xxx', // 使用其他主题
    themeConfig: { // 默认主题
        logo: '/images/logo.jpg',
        nav: [
            {text: '首页', link: '/'},
            {text: 'Markdown 教程', link: '/markdown'},
            {text: 'Git 教程', link: '/git/git-command'},
            {text: 'Spring Boot 教程', link: '/springboot/'},
            {text: '其他教程', items: [
                {text: 'GitHub 教程', link: '/github/github-search-advanced'},
                {text: 'Spring Cloud 教程', link: '/springcloud/'}
            ]},
            // {text: '项目地址', items: [
            //     {text: '示例项目', items: [
            //         {text: '示例代码', link: 'https://github.com/cxy35/learning'},
            //         {text: '示例代码（Spring Boot）', link: 'https://github.com/cxy35/spring-boot-samples'},
            //         {text: '示例代码（Spring Cloud）', link: 'https://github.com/cxy35/spring-cloud-samples'},
            //     ]},
            //     {text: '实战项目', items: [
            //         {text: '人力资源管理系统', link: 'https://github.com/cxy35/hr'}
            //     ]}
            // ]},
            // {text: '个人站点', items: [
            //     {text: '独立站点', link: 'https://www.cxy35.top'},
            //     {text: 'CSDN', link: 'https://blog.csdn.net/cxy35'},
            //     {text: 'OSCHINA', link: 'https://my.oschina.net/cxy35'}
            // ]},
            {text: 'GitHub', link: 'https://github.com'},
            // {text: 'Gitee', link: 'https://gitee.com/cxy35'}
        ],
        sidebar: {
            '/git/': [
                {
                    title: 'Git 手册',
                    // path: '/git/', // 点击分组标题的跳转链接
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['', '首页'],
                        ['git-command', '常用 Git 命令清单'],
                        ['git-rebase', 'Git 变基合并'],
                        ['git-command-mindmap', 'Git 命令思维导图']
                    ]
                },
                {
                    title: 'Git 文档笔记',
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['git-base', 'Git 基础与命令']
                    ]
                }
            ],
            '/github/': [
                {
                    title: 'GitHub 技巧',
                    // path: '/github/', // 点击分组标题的跳转链接
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        ['github-search-advanced', 'GitHub 高级搜索技巧'],
                        ['github-actions', 'GitHub Actions 定时运行代码'],
                        ['github-download-fast', 'GitHub 加速下载项目的方法']
                    ]
                }
            ],
            '/springboot/': [
                ['', 'Spring Boot 教程']
            ],
            '/springcloud/': [
                ['', 'Spring Cloud 教程']
            ],
            '/': [
                ['markdown', 'Markdown 使用教程']
            ]
        },
        // sidebar: [
        //     {
        //         title: 'Git 手册',
        //         // path: '/git/', // 点击分组标题的跳转链接
        //         collapsable: false,
        //         sidebarDepth: 2,
        //         children: [
        //             ['/git/git-command', '常用 Git 命令清单'],
        //             ['/git/git-rebase', 'Git 变基合并'],
        //             ['/git/git-command-mindmap', 'Git 命令思维导图']
        //         ]
        //     },
        //     {
        //         title: 'Git 文档笔记',
        //         collapsable: false,
        //         sidebarDepth: 2,
        //         children: [
        //             ['/git/git-base', 'Git 基础与命令']
        //         ]
        //     },
        //     {
        //         title: 'GitHub 技巧',
        //         // path: '/github/', // 点击分组标题的跳转链接
        //         collapsable: false,
        //         sidebarDepth: 2,
        //         children: [
        //             ['/github/github-search-advanced', 'GitHub 高级搜索技巧'],
        //             ['/github/github-actions', 'GitHub Actions 定时运行代码'],
        //             ['/github/github-download-fast', 'GitHub 加速下载项目的方法']
        //         ]
        //     }
        // ],
        lastUpdated: '上次更新',
        smoothScroll: true
    }
};