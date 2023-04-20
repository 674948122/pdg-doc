module.exports = {
    theme: "vdoing",
    head: [
        ['link', { rel: 'icon', href: '/images/logo.jpeg' }],
        // ['link', { rel: 'stylesheet', href: '/style/main.css' }],
    ],
    title: 'PDG-DOC',
    themeConfig: {
        logo: '/images/logo.jpeg',
        nav: [
            { text: "Home", link: "/" },
            { text: "GitHub", link: "https://github.com/674948122/pdg-doc" },
        ],
        sidebar: "structuring", //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
        pageStyle: "line",
    },
    plugins: [
        "fulltext-search", 
        "one-click-copy", 
        "cursor-effects", 
        "element-ui",
        "demo-container",
    ]
};
