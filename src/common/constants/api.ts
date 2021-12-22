import { gql } from '@apollo/client';

// 全件取得
export const GET_POSTS = gql`
  query {
    posts {
      id
      title
      description
      photo
      createdAt
    }
  }
`;

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
`;

// 会員登録
export const SIGN_UP = gql`
  mutation signup(
      $email: String!
      $password: String!
      $name: String!
    ) {
    signup(
      email: $email
      password: $password
      name: $name
    ) {
    token
  }
}
`;

// ログイン
export const SIGN_IN = gql`
  mutation signin(
      $email: String!
      $password: String!
    ) {
    signin(
      email: $email
      password: $password
    ) {
    token
  }
}
`;

// 認証済みチェック
export const AUTH = gql`
  mutation auth(
      $token: String!
    ) {
    auth(
      token: $token
    ) {
    id
    name
  }
}
`;
