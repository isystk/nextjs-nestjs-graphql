import { createSlice } from '@reduxjs/toolkit'
import { GET_POSTS, FIND_POST } from '@/common/constants/api'
import * as _ from 'lodash'
import client from '@/utilities/api'

const requestGetPosts = async () => {
  const { loading, error, data } = await client.query({
    query: GET_POSTS,
  })
  return { loading, error, data }
}

const requestGetPost = async (id: string) => {
  const { loading, error, data } = await client.query({
    query: FIND_POST,
    variables: { id: Number(id) },
  })
  return { loading, error, data }
}

const postsSlice = createSlice({
  name: 'posts',
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
    fetchPosts(state?, action?) {
      state.loading = false
      state.error = null
      state.items = _.mapKeys(action.payload.data.getPosts, 'id')
    },
    fetchPost(state?, action?) {
      state.loading = false
      state.error = null
      const post = action.payload.data.findPost
      state.items = { ...state.items, [post.id]: post }
    },
  },
})

// Actions
export const {
  fetchStart,
  fetchFailure,
  fetchPosts,
  fetchPost,
} = postsSlice.actions

const request = (func) => async (dispatch) => {
  try {
    dispatch(fetchStart())
    dispatch(func)
  } catch (error) {
    dispatch(fetchFailure(error.stack))
  }
}

// 外部からはこの関数を呼んでもらう
export const readPosts = () => async (dispatch) => {
  dispatch(request(fetchPosts(await requestGetPosts())))
}
export const readPost = (id: string) => async (dispatch) => {
  dispatch(request(fetchPost(await requestGetPost(id))))
}

// Selectors
export const selectPosts = ({ posts }) => posts

export default postsSlice.reducer
