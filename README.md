<h1 align="center">Welcome to dz-forum 👋</h1>
<p>
</p>

> 基于GraphQL Relay的社区

## start

- 确保已安装watchman

  ```shell
  watchman -v
  ```

  if not:

  ```shell
  brew install watchman
  ```

- 安装依赖

  ```shell
  # lerna bootstrap
  yarn bs
  ```

- 启动

  ```shell
  # 同时启动compiler和server
  yarn dev-all

  # 分别启动

  # 启动server
  yarn server
  # 启动relay compiler
  yarn relay
  ```

- vscode

  推荐安装GraphQL插件。

## 关于

- GraphQL

  GraphQL是一个基于类型系统的查询语言和规范。

  [参考文档](https://graphql.github.io/learn/)

- Relay

  Relay是一个依赖于GraphQL的用于构建数据驱动式React App的js框架。

  [参考文档](http://facebook.github.io/relay/docs/en/introduction-to-relay.html)

- PostGraphile

  PostGraphile是基于PostgreSQL快速构建功能强大的GraphQL API的工具。项目中我们使用PostGraphile和express搭建一个简单的GraphQL Server。

  [参考文档](https://www.graphile.org/postgraphile/usage-library/)

## 项目简介

- server

  基于postgraphile和express的graphql server

  - express server
  - graphql、upload、logger、next、kong中间件等
  - server端配置

- web

  基于next的react app

  - 页面内容
  - 打包上传脚本
  - next配置相关

- relay

  schema和query所在地

  - 自定义的query | mutation | subscription
  - compiler生成的graphql ast及ts类型
  - server生成的schema以及compiler生成的queryId映射json
  - pg的sql也保存在这里

- components和hooks

  常用的组件和钩子

- apps和plugins

  留待以后使用的插件系统和移动端相关内容

## Author

👤 **DerekZhou**


## Show your support

Give a ⭐️ if this project helped you !

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_