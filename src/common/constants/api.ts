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
      updatedAt
      authorId
    }
  }
`;

// 指定したIDのTODOを1件取得
export const GET_TODO = gql`
  query getTodo($id: String!) {
    todo(id: $id) {
      id
      type
    }
  }
`;