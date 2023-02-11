# gossip - 基于 GitHub issue 系统的极简博客引擎

## 预览

[vercel channel](https://qianxi.me)

[github channel](https://qianxi0410.github.io/gossip)

## 使用方法

1. clone 或者 fork 这个仓库

2. 在你的仓库中，允许新建 issue，允许 Action 允许。

- 允许新建 issue: 在 Settings -> General -> Features -> Issues -> check `Issues`
- 允许 Action 运行: 在 Actions -> 点击 `Allow all actions`

### vercel channel

1. 注释掉[ci-and-cd](./.github/workflows/ci-and-cd.yml)文件里面的 github channel 部分的 yml 代码，并且去除 vercel channel 的注释。
2. 你需要有一个固定的 url 地址，将 `rss.ts` 里面的地址和[ci-and-cd](./.github/workflows/ci-and-cd.yml)中的`alias-domains`替换成你自己的 url 地址。这个地址必须解析到你自己的 vercel 服务器上。如何解析请自行 google。
3. 与常规的 vercel 触发部署不同，本项目使用 ci 进行触发，所以你需要配置好一些 GitHub Action 变量。

- [ ] ORG_ID
- [ ] PROJECT_ID
- [ ] VERCEL_TOKEN

变量的获取方式为：

- clone 项目到本地
- 配置好`.env`文件中的内容
- 运行`vercel`命令，成功之后，找到项目根目录下的`.vercel/project.json`，里面有`orgId`和`projectId`，将这两个值分别赋值给`ORG_ID`和`PROJECT_ID`。此外，VERCEL_TOKEN 的获取方式需要去 vercel 官网获取。

4. 在你的仓库中，新建 issue，带上`published`标签，然后等待推送即可。

### github channel

1. 默认只有 github channel 触发。
2. 推荐你将项目的仓库命名为`[your-username].github.io`，当然其他任意名称均可。
3. 如果是推荐项目名称，此时你的固定的 url 地址即为`https://[your-username].github.io`，如果是其他名称，比如`blog`仓库，此时你的固定的 url 地址即为`https://[your-username].github.io/blog`。
4. 在你的仓库中，新建 issue，带上`published`标签，然后等待推送即可。
5. 允许`GitHub Pages`预览：Settings -> Pages -> Deploy from a branch -> gh-pages -> / (root) -> save
6. 如果你有域名的话，可以自行配置域名解析。

## 配置项

查看[next.config.js](./next.config.js)文件，你可以看到一些配置选项，你可以根据自己的需求来修改这些配置项。

## 二次开发

新建 `.env.local`文件，把`.env`中的内容拷贝过去，并且填上你自己的内容，启动项目开发即可。
