module.exports = {
    theme: "vdoing",
    head: [
        ['link', { rel: 'icon', href: '/images/logo.jpeg' }]
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
    plugins: ["element-ui", "fulltext-search", "one-click-copy", "cursor-effects"],
};
