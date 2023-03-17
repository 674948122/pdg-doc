
# 用lodash-es代替lodash

lodash为了良好的浏览器兼容性, 它使用了旧版es5的模块语法; 而lodash-es则使用了es6的模块语法, 这让webpack之类的打包工具可以对其进行tree shake以删除为使用的代码来优化打包尺寸.

下面的代码直接从lodash中引入trimStart方法

`import { trimStart } from 'lodash';`

如果使用的是webpack进行打包的话, 仅此一行就会导致打包尺寸增加 70+ kb

而如果把lodash改为lodash-es

`import { trimStart } from 'lodash-es';`

下面的代码和使用lodash-es进行导入有一样的效果

`import trimStart from 'lodash/trimStart';`

这是默认导入的语法, 但是这种导入方式当我们需要在一个文件中导入多个lodash方法时就不太方便了

例如需要trimStart和trimEnd方法, 从lodash-es中导入只需一行

`import { trimStart, trimEnd } from 'lodash-es';`

而通过默认导入的方式从lodash中导入则需要两行

```javascript
import trimStart from 'lodash/trimStart';
import trimEnd from 'lodash/trimEnd';
```

**那么打包尺寸则只会增加 1kb 左右, 70kb对比1kb差距还是十分巨大的.**

通过上面的对比, 如果是使用webpack来进行打包的话, 我们在使用lodash库时, 尽量通过lodash-es来进行导入操作, 以此来避免以此行导入全部lodash代码到最终生产环境的代码.
