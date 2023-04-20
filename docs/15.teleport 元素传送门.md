# teleport 元素传送门

主要用解决元素传送问题，通常我们会遇到这样的问题，弹窗多层嵌套，彼此层级混乱不堪，可是业务逻辑要求我们必须这样编写，否则弹窗存放按序，会导致业务逻辑混乱，鱼和熊掌不可兼得，该组件就是为了解决这个问题而生，他可以将某段html传送至你指定的元素下。


>tips：在最新的vue3中默认内置了该组件，当前组件是用vue2的语法实现了该功能。

## 使用标签

```vue
<teleport to="#big_screen_container"></teleport>
```

## 参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| to | 传送目标 | String | - |

## 源代码

```vue
<script>
// 元素传送门
export default {
  name: "teleport",
  props: {
    /* 移动至哪个标签内，最好使用id */
    to: {
      type: String,
      required: true,
    },
  },

  mounted() {
    document.querySelector(this.to).appendChild(this.$el);
  },

  beforeDestroy() {
    document.querySelector(this.to) && document.querySelector(this.to).removeChild(this.$el);
  },

  render() {
    return <div>{this.$scopedSlots.default()}</div>;
  },
};
</script>
```