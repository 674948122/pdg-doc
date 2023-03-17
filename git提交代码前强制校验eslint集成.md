
### husky

运行命令`npm i husky@4.3.8`

### lint-staged

运行命令`npm i lint-staged@9.5.0`

### `package.json`添加配置

```json
"scripts": {
    "lint-staged": "lint-staged",
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,vue}": [
      "eslint --fix",
      "git add"
    ]
  },
```

### prettier

运行命令

`npm i prettier@1.18.2`

`npm i eslint-plugin-prettier@3.1.0`

`npm i @vue/eslint-config-prettier@5.0.0`

### 疑难问题

##### pre-commit不触发

项目目录下.git/config的文件里加了一行
hooksPath = .husky，手动删除这行就能触发了

##### 提交报错

如果在提交代码遇到如下错误提示，可以试着更新一下git。
![](/uploads/projects/eslint/1749ffee1319982e.png)
