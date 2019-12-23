# nuxt_h5_app

- 移动端适配插件

  - cssnano
  - cssnano-preset-advanced
  - postcss-aspect-ratio-mini
  - postcss-import
  - postcss-preset-env
  - postcss-px-to-viewport
  - postcss-url
  - postcss-viewport-units
  - postcss-write-svg

- nuxt.config.js 下 build 添加如下配置

```
postcss: {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      utf8: false
    },
    'postcss-preset-env': {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 1,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines', '.van'],
      minPixelValue: 1,
      mediaQuery: false
    },
    'postcss-viewport-units': {},
    cssnano: {
      preset: 'advanced',
      autoprefixer: false,
      'postcss-zindex': false
    }
  }
},
```

---

<!-- - 按需引入 vant

  - babel-plugin-component

- nuxt.config.js 下 build 添加如下配置

```
babel: {
  plugins: [
    [
      'component',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: false
      }
    ]
  ]
},
``` -->

---

- plugins 目录下新建 vant.js 文件

```
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)

```

- nuxt.config.js 下 plugins 添加如下配置

```
plugins: ['@/plugins/vant'],
css: ['reset.css', 'flex.css', 'vant/lib/index.css'],
```

---

- 配置使用 import

  - @babel/cli
  - @babel/core
  - @babel/node
  - @babel/preset-env

- 修改 package.json 文件

```
"scripts": {
  "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server --exec babel-node --presets @babel/env",
  "build": "nuxt build",
  "start": "cross-env NODE_ENV=production node server/index.js --exec babel-node --presets @babel/env",
  "generate": "nuxt generate",
  "lint": "eslint --ext .js,.vue --ignore-path .gitignore ."
},
```

- 新增.babelrc 文件

```
{
  "env": {
    "test": {
      "presets": [
        [
          "@babel/preset-env",
          {
            "targets": {
              "node": "current"
            }
          }
        ]
      ]
    }
  }
}
```

**现在有一个问题：vant 的 css 是全局引入的，导致打包文件很大，githulb 上有人提 issue，但是无解。**
