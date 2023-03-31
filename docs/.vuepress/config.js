module.exports = {
    theme: "vdoing",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "GitHub", link: "https://github.com/674948122/pdg-doc" },
        ],
        sidebar: "structuring", //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
        pageStyle: "line",
    },
    plugins: ["fulltext-search", "one-click-copy", "cursor-effects"],
};
