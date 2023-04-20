# css变量

## 定义
`--demo-color: '#fff';`

`<div data-text="啦啦啦"></div>`

## 获取

`color: var(--demo-color);`

`content: attr(data-text);`


```html
<template>
    <div class="demo" data-text="啦啦啦"></div>
</template>
<script>
export default {
  data(){
    return {
        
    }
  }
}
</script>
<style lang="scss">
    :root{
        --demo-color: '#fff';
    }
    .demo{
        color: var(--demo-color);     // css全局变量
        &:after{
            content: attr(data-text); // 动态获取内容    
        }
    }
</style>
```