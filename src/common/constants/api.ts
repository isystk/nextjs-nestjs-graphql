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