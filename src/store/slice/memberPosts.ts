import { createSlice } from '@reduxjs/toolkit'
import {
  GET_MY_POSTS,
  GET_MY_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from '@/common/constants/api'
import * as _ from 'lodash'
import client from '@/utilities/api'
import { Post } from '@/store/StoreTypes'

const requestGetMemberPosts = async (token: string, userId: number) => {
  const { data } = await client.mutate({
    mutation: GET_MY_POSTS,
    variables: {
      token,
      authorId: userId,
    },
  })
  return { data: data.getMyPosts }
}

const requestGetMemberPost = async (token: string, id: number) => {
  const { data } = await client.mutate({
    mutation: GET_MY_POST,
    variables: {
      token,
      id,
    },
  })
  return { data: data.getMyPost }
}

const requestPostMemberPost = async (token: string, values: Post) => {
  const { data } = await client.mutate({
    mutation: CREATE_POST,
    variables: {
      ...values,
      token,
    },
  })
  return { data: data.createPost }
}

const requestPutMemberPost = async (
  token: string,
  id: number,
  values: Post
) => {
  const { data } = await client.mutate({
    mutation: UPDATE_POST,
    variables: {
      ...values,
      token,
      id,
    },
  })
  return { data: data.updatePost }
}

const requestDeleteMemberPost = async (token: string, id: number) => {
  const { data } = await client.mutate({
    mutation: DELETE_POST,
    variables: {
      token,
      id,
    },
  })
  return { data: data.deletePost }
}

const memberPostsSlice = createSlice({
  name: 'member_posts',
  initialState: { loading: false, error: null, items: [] },
  reducers: {
    // 通信を開始した時に呼ぶ関数
    fetchStart(state?, action?) {
      state.loading = true
      state.error = null
    },
    // 通信が失敗した時に呼ぶ関数
    fetchFailure(state?, action?) {
      state.loading = false
      state.error = action.payload
    },
    fetchMemberPosts(state?, action?) {
      state.loading = false
      state.error = null
      state.items = _.mapKeys(action.payload.data, 'id')
    },
    fetchMemberPost(state?, action?) {
      state.loading = false
      state.error = null
      const post = action.payload.data
      state.items = { ...state.items, [post.id]: post }
    },
    unfetchMemberPost(state?, action?) {
      state.loading = false
      state.error = null
      const id = action.payload.data
      delete state.items[id]
      state.items = { ...state.items }
    },
  },
})

// Actions
export const {
  fetchStart,
  fetchFailure,
  fetchMemberPosts,
  fetchMemberPost,
  unfetchMemberPost,
} = memberPostsSlice.actions

const request = (func) => async (dispatch) => {
  try {
    dispatch(fetchStart())
    dispatch(func)
  } catch (error) {
    dispatch(fetchFailure(error.stack))
  }
}

// 外部からはこの関数を呼んでもらう
export const getMemberPosts = (token: string, userId: number) => async (
  dispatch
) => {
  dispatch(
    request(fetchMemberPosts(await requestGetMemberPosts(token, userId)))
  )
}
export const getMemberPost = (token: string, id: number) => async (
  dispatch
) => {
  dispatch(request(fetchMemberPost(await requestGetMemberPost(token, id))))
}
export const postMemberPost = (token: string, value: Post) => async (
  dispatch
) => {
  dispatch(request(fetchMemberPost(await requestPostMemberPost(token, value))))
}
export const putMemberPost = (token: string, id: number, value: Post) => async (
  dispatch
) => {
  dispatch(
    request(fetchMemberPost(await requestPutMemberPost(token, id, value)))
  )
}
export const deleteMemberPost = (token: string, id: number) => async (
  dispatch
) => {
  dispatch(request(unfetchMemberPost(await requestDeleteMemberPost(token, id))))
}

// Selectors
export const selectMemberPosts = ({ memberPosts }) => memberPosts

export default memberPostsSlice.reducer
