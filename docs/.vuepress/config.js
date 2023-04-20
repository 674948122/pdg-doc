module.exports = {
    theme: "vdoing",
    head: [
        ['link', { rel: 'icon', href: '/images/logo.jpeg' }],
        ['link', { rel: 'stylesheet', href: '/style/main.css' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
        ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
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
        "element-ui", 
        "fulltext-search", 
        "one-click-copy", 
        "cursor-effects", 
        "vuepress-plugin-demo-block"
    ],
};
