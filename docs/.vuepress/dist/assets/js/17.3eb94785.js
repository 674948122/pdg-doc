(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{340:function(t,a,s){"use strict";s.r(a);var n=s(3),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-内存溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-内存溢出"}},[t._v("#")]),t._v(" 1.内存溢出")]),t._v(" "),a("p",[t._v("一种程序运行出现的错误")]),t._v(" "),a("p",[t._v("当程序运行需要的内存超过了剩余的内存时，就抛出内存溢出的错误。")]),t._v(" "),a("h3",{attrs:{id:"_2-内存泄漏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-内存泄漏"}},[t._v("#")]),t._v(" 2.内存泄漏")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("占用的内存没有及时释放")])]),t._v(" "),a("li",[a("p",[t._v("内存泄漏积累多了就容易导致内存溢出")])])]),t._v(" "),a("h3",{attrs:{id:"_3-常见的内存泄漏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见的内存泄漏"}},[t._v("#")]),t._v(" 3.常见的内存泄漏")]),t._v(" "),a("ul",[a("li",[t._v("意外的全局变量")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里的a是一个全局变量，占用了大量的全局变量空间，从而导致内存泄漏")]),t._v("\n a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jnew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("没有及时清理的计时器或回调函数。计时器多了就会占用太多的内存，也会造成内存泄漏。")]),t._v(" "),a("li",[t._v("没有及时卸载无用的事件绑定，会造成内存的泄漏。")]),t._v(" "),a("li",[t._v("由于闭包的存在，且没有即使处理，这时闭包一直都在内存当中，数据多了，就会造成内存的泄漏。")]),t._v(" "),a("li",[a("code",[t._v("console.log()")]),t._v("导致内存引用，会造成内存的泄漏。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);