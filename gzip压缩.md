
### gzip压缩

#### 前言

- 很多Vue项目，都有一个通病，随着代码越来越庞大，首页加载越来越慢，有时候出去演示，网络不好的时候，转半天，登录页面还没有出来。这主要是一些大的js文件造成的，这就是Vue的缺点吧，所有的代码都打包到一个JS文件里，网络传输太慢，有的项目都十几兆。

- gzip的本质，是在build的时候打包两份代码，一份压缩的，一份未压缩的，然后nginx在接收请求时，优先选择压缩后的格式返给客户端。

- 使用gzip进行压缩，可以压缩js和css文件大小，提升加载速度。

#### 前端代码配置

1. 下载代码压缩插件，运行命令`npm i compression-webpack-plugin@1.1.2`

2. 写入压缩配置，如下

`build/webpack.prod.conf.js`

```javascript
if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}
```

`config/index.js`

```javascript
module.exports = {
 build:{
  productionGzip: true,
  productionGzipExtensions: ['js', 'css']
 }
}
```

tips: `config/index.js`文件中的`productionGzip`变量起到了快捷开关压缩功能的作用,`productionGzipExtensions`用来规定需要压缩的文件类型。

#### nginx服务器配置

1. 修改nginx服务器配置，开启服务器的gzip功能，向`nginx.conf`文件中写入配置，如下

```javascript
http {
 gzip  on;
 gzip_min_length  1k; # 不压缩临界值，大于1K的才压缩
 gzip_buffers     4 16k;
 gzip_http_version 1.1;
 gzip_comp_level 2;
 gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml application/xml+rss; # #进行压缩的文件类型
 gzip_vary on;
 gzip_proxied   expired no-cache no-store private auth;
 gzip_disable   "MSIE [1-6]\.";
 
 server {
  ...一些常规内容
 }
}
```

tips: 以上配置书写位置在`server`之前即可。

2. 重启nginx服务器，以便让上面的配置生效`nginx -s reload`

#### 效果分析

![](images/1735744ec7df59f3.png)

通常`gzip`压缩可以减小文件大小`70%`以上，效果还是比较显著的，在相同网络状况下，首屏加载时间可以加快`40%`以上，大幅提升加载速度，增强用户体验。

![](images/1735746db1170442.png)

如果gzip开启成功，在请求响应头中会看到gzip相关字样，并且size会相应变小。
