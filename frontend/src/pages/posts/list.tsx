import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import { selectPosts, readPosts } from '@/store/slice/posts'
import moment from 'moment'

import { Data, Posts, Post } from '@/store/StoreTypes'
import Link from 'next/link'
import * as _ from 'lodash'
import Head from '@/components/pages/Head'
import SnsShare from '@/components/widgets/SnsShare'
import Modal from '@/components/widgets/Modal'
type State = {
  posts: Posts
}
type PostDisplay = Post & {
  id: string
  createdAt_yyyymmdd: string
}

const PostsList: FC = () => {
  const dispatch = useDispatch()
  const { loading, error, items } = useSelector(selectPosts)

  useEffect(() => {
    dispatch(readPosts())
  }, [dispatch])

  if (loading) return <p>...loading</p>
  if (error) return <p>{error}</p>

  const posts: PostDisplay[] = _.map(items, function (e: Data<Post>) {
    return {
      ...e,
      createdAt_yyyymmdd: e.createdAt
        ? moment(e.createdAt).format('YYYY/MM/DD')
        : '',
    } as PostDisplay
  })

  const renderPosts = () => {
    return _.map(posts, (e, i) => (
      <section key={i}>
        <Link href={`${URL.POSTS}/${e.id}`}>
          <a>
            <div className="entry-header">
              <div className="category_link">{e.tagName}</div>
              <h2 className="entry-title">{e.title}</h2>
              <div className="entry-meta">
                <span>{e.createdAt_yyyymmdd}</span>
              </div>
            </div>
            <div className="entry-content">
              <img
                alt="sample1"
                width="300"
                height="174"
                src={e.photo}
                className="attachment-medium size-medium wp-post-image"
              />
              <p>{e.description}</p>
              <div className="clearfix"></div>
            </div>
          </a>
        </Link>
      </section>
    ))
  }

  return (
    <Layout>
      <Head />
      <section>
        <div className="entry-header">
          <h1 className="entry-title">HOME</h1>
        </div>
        <div className="entry-content">
          <p>すべての投稿を一覧表示しています。</p>
          <div className="box-list">{renderPosts()}</div>
        </div>
      </section>
      <Modal>
        <SnsShare title="Isystk&rsquo;s Frontend Sample" url={URL.HOME} />
      </Modal>
    </Layout>
  )
}

export default PostsList
