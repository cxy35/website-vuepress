module.exports = {
    title: '江南一点雨',
    head: [
        ['link', {rel: 'icon', href: 'https://open.weixin.qq.com/qr/code?username=a_javaboy'}]
    ],
    themeConfig: {
        logo: 'https://open.weixin.qq.com/qr/code?username=a_javaboy',
        nav: [
            {text: '首页', link: '/'},
            {text: '国际站', link: 'http://www.javaboy.org'},
            {text: '国内站', link: 'http://www.itboyhub.com'},
            {text: '其他', items: [
                {text: '国际站', link: 'http://www.javaboy.org'},
                {text: '国内站', link: 'http://www.itboyhub.com'}
            ]}
        ],
        sidebar: [
            {
                title: 'Spring Boot',
                path: '/springboot/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/springboot/spring-boot-helloworld',
                    '/springboot/spring-boot-properties'
                ]
            },
            {
                title: 'Spring Cloud',
                path: '/springcloud/',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    '/springcloud/spring-cloud-overview',
                    '/springcloud/spring-cloud-netflix-eureka'
                ]
            },
        ]
    }
};