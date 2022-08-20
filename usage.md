# gossip - 基于 GitHub issue 系统的极简博客引擎

## 预览

[vercel channel](https://qianx1.xyz)

[github channel](https://qianxi0410.github.io/gossip)

## 使用方法

clone 或者 fork 这个仓库

### vercel channel

1. 注释掉[ci-and-cd](./.github/workflows/ci-and-cd.yml)文件里面的 github channel 部分的 yml 代码。
2. 与常规的 vercel 触发部署不同，本项目使用 ci 进行触发，所以你需要配置好一些 GitHub Action 变量。

- [ ] ORG_ID
- [ ] PROJECT_ID
- [ ] VERCEL_TOKEN

这些都是 Action 必须的变量，你可以参考[vercel-action](https://github.com/amondnet/vercel-action)这个 repo 的指导来获取这些变量。

3. 你需要有一个固定的 url 地址，将本项目内的所有`qianx1.xyz`(2 处)都替换成自己的 url 地址。这个地址必须解析到你自己的 vercel 服务器上。如何解析请自行 google。
4. 在你的仓库中，新建 issue，带上`published`标签，然后等待推送即可。

### github channel

1. 注释掉[ci-and-cd](./.github/workflows/ci-and-cd.yml)文件里面的 vercel channel 部分的 yml 代码。
2. 推荐你将项目的仓库命名为`[your-username].github.io`，当然其他任意名称均可。
3. 如果是推荐项目名称，此时你的固定的 url 地址即为`https://[your-username].github.io`，如果是其他名称，比如`blog`仓库，此时你的固定的 url 地址即为`https://[your-username].github.io/blog`。
4. 在你的仓库中，新建 issue，带上`published`标签，然后等待推送即可。

## 配置项

查看[next.config.js](./next.config.js)文件，你可以看到一些配置选项，你可以根据自己的需求来修改这些配置项。

## 二次开发

新建 `.env.local`文件，把`.env`中的内容拷贝过去，并且填上你自己的内容，启动项目开发即可。
