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

const requestGetMemberPosts = async (userId: number) => {
  const { data } = await client.mutate({
    mutation: GET_MY_POSTS,
    variables: {
      authorId: userId,
    },
  })
  return { data: data.getMyPosts }
}

const requestGetMemberPost = async (id: number) => {
  const { data } = await client.mutate({
    mutation: GET_MY_POST,
    variables: {
      id,
    },
  })
  return { data: data.getMyPost }
}

const requestPostMemberPost = async (values: Post) => {
  const { data } = await client.mutate({
    mutation: CREATE_POST,
    variables: {
      ...values,
    },
  })
  return { data: data.createPost }
}

const requestPutMemberPost = async (id: number, values: Post) => {
  const { data } = await client.mutate({
    mutation: UPDATE_POST,
    variables: {
      ...values,
      id,
    },
  })
  return { data: data.updatePost }
}

const requestDeleteMemberPost = async (id: number) => {
  const { data } = await client.mutate({
    mutation: DELETE_POST,
    variables: {
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
export const getMemberPosts = (userId: number) => async (dispatch) => {
  dispatch(request(fetchMemberPosts(await requestGetMemberPosts(userId))))
}
export const getMemberPost = (id: number) => async (dispatch) => {
  dispatch(request(fetchMemberPost(await requestGetMemberPost(id))))
}
export const postMemberPost = (value: Post) => async (dispatch) => {
  dispatch(request(fetchMemberPost(await requestPostMemberPost(value))))
}
export const putMemberPost = (id: number, value: Post) => async (dispatch) => {
  dispatch(request(fetchMemberPost(await requestPutMemberPost(id, value))))
}
export const deleteMemberPost = (id: number) => async (dispatch) => {
  dispatch(request(unfetchMemberPost(await requestDeleteMemberPost(id))))
}

// Selectors
export const selectMemberPosts = ({ memberPosts }) => memberPosts

export default memberPostsSlice.reducer
