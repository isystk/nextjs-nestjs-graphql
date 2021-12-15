🌙 nextjs-nestjs-graphql
====

![GitHub issues](https://img.shields.io/github/issues/isystk/nextjs-nestjs-graphql)
![GitHub forks](https://img.shields.io/github/forks/isystk/nextjs-nestjs-graphql)
![GitHub stars](https://img.shields.io/github/stars/isystk/nextjs-nestjs-graphql)
![GitHub license](https://img.shields.io/github/license/isystk/nextjs-nestjs-graphql)

## 📗 プロジェクトの概要

Next.js（フロントエンド）・Nest.js（サーバーサイド）・GraghQLを利用したサンプルアプリケーションです。


### 利用している技術

- Next.js 10 (React.js 16)
- typescript 4
- material-ui
- redux-toolkit
- aws-cognito
- aws-lambda


## 🌐 Demo

https://nextjs-nestjs-graphql.vercel.app/

![投稿一覧画面](./app1.png "投稿一覧画面")
![投稿画面](./app2.png "投稿画面")

- ログイン/ログアウト
- 会員登録
- 投稿一覧
- 投稿詳細
- マイページ（一覧・登録・更新・削除）


## 📦 ディレクトリ構造

```
.
├── public/
├── src/ (Next.js のソースコード)
│   ├── auth/
│   ├── common/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── styles/
│   └── utilities/
└── test/
```

## 💬 使い方

サーバーサイド
```
# 下準備
$ ./dc.sh init

# Dockerを起動する
$ ./dc.sh start

# データベースとPHPが立ち上がるまで少し待ちます。(初回は5分程度)

# MySQLにログインしてみる
$ ./dc.sh mysql login

cd ./server

# 外部モジュールをインストール
$ yarn

# Prisma でテーブルを作成する
$ npx prisma migrate dev --name posts

# Prisma Studio を起動する
$ npx prisma studio
-----
ブラウザが起動するのでテストデータを登録してください。
-----

# アプリを起動する
$ yarn start

# ブラウザでアクセス
$ open http://localhost:3000/graphql

# 以下のように必要なフィールドのみを指定してデータを取得できます。
-----
query {
  posts {
    id
    user_id
    title
    description
    photo
    regist_datetime
    update_datetime
  }
}
-----
# データを登録する場合はMutationを利用します。
-----
mutation {
  createPost(user_id: "userA", title:"titleA", description:"textA", photo:"photo") {
    id
  }
}
-----

# Dockerを停止する場合
$ ./dc.sh stop
```

クライアントサイド
```
yarn
yarn dev
```

## 🎨 参考

| プロジェクト| 概要|
| :---------------------------------------| :-------------------------------|
| [react-bootstrap](https://react-bootstrap.github.io/components/)| BootstrapのReact用コンポーネント |



## 🎫 Licence

[MIT](https://github.com/isystk/nextjs-nestjs-graphql/blob/master/LICENSE)

## 👀 Author

[isystk](https://github.com/isystk)

