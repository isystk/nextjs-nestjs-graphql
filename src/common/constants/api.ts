import { gql } from '@apollo/client';

// 全件取得
export const GET_POSTS = gql`
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