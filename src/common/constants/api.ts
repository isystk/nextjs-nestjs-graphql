import { gql } from '@apollo/client'

// 全件取得
export const GET_POSTS = gql`
  query {
    getPosts {
      id
      title
      description
      photo
      createdAt
    }
  }
`

// 指定したIDのPOSTを1件取得
export const FIND_POST = gql`
  query findPost($id: Float!) {
    findPost(id: $id) {
      id
      title
      description
      photo
      createdAt
      updatedAt
      authorId
    }
  }
`

// 会員登録
export const SIGN_UP = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

// ログイン
export const SIGN_IN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
    }
  }
`

// 認証済みチェック
export const AUTH = gql`
  mutation auth($token: String!) {
    auth(token: $token) {
      id
      name
    }
  }
`

// My投稿一覧
export const GET_MY_POSTS = gql`
  query getMyPosts($authorId: Float!) {
    getMyPosts(authorId: $authorId) {
      id
      title
      description
      photo
      createdAt
    }
  }
`

// My投稿詳細
export const GET_MY_POST = gql`
  query getMyPost($id: Float!) {
    getMyPost(id: $id) {
      id
      title
      description
      photo
      createdAt
      updatedAt
      authorId
    }
  }
`

// 投稿登録
export const CREATE_POST = gql`
  mutation createPost(
    $title: String!
    $description: String!
    $photo: String!
    $authorId: Float!
  ) {
    createPost(
      title: $title
      description: $description
      photo: $photo
      authorId: $authorId
    ) {
      id
      title
      description
      photo
    }
  }
`

// 投稿更新
export const UPDATE_POST = gql`
  mutation updatePost(
    $id: Float!
    $title: String!
    $description: String!
    $photo: String!
    $authorId: Float!
  ) {
    updatePost(
      id: $id
      title: $title
      description: $description
      photo: $photo
      authorId: $authorId
    ) {
      id
      title
      description
      photo
    }
  }
`

// 投稿削除
export const DELETE_POST = gql`
  mutation deletePost($id: Float!) {
    deletePost(id: $id) {
      id
    }
  }
`
