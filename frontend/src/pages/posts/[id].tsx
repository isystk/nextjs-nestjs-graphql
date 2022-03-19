import React, { useEffect, useState, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router, { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import { selectPosts, readPost } from '@/store/slice/posts'
import moment from 'moment'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider } from '@/components/pages/Slider'
import * as _ from 'lodash'
import Head from '@/components/pages/Head'
import SnsShare from '@/components/widgets/SnsShare'
import Modal from '@/components/widgets/Modal'

const PostsDetail: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [id, setId] = useState('')
  const { loading, error, items } = useSelector(selectPosts)

  // この部分を追加
  useEffect(() => {
    // idがqueryで利用可能になったら処理される
    if (router.asPath !== router.route) {
      setId(router.query.id)
    }
  }, [router])

  useEffect(() => {
    if (id) dispatch(readPost(id))
  }, [id])

  if (loading) return <p>...loading</p>
  if (error) return <p>{error}</p>

  const data = items[id] || {}
  const post = {
    ...data,
    createdAt_yyyymmdd:
      data.createdAt && moment(data.createdAt).format('YYYY/MM/DD HH:mm'),
  }

  return (
    <Layout>
      <Head title={post.title} />
      <section>
        {
          //<!-- パンくず -->
        }
        <nav className="breadcrumb">
          <ul>
            <li>
              <Link href={URL.HOME}>
                <a>
                  <FontAwesomeIcon icon="home" style={{ width: 16 }} />
                  <span>HOME</span>
                </a>
              </Link>
            </li>
            <li>{post && post.title}</li>
          </ul>
        </nav>

        <div className="entry-header">
          <h1 className="entry-title">{post && post.title}</h1>
          <div className="article-img">
            <Slider>
              {post &&
                _.map([post.photo], (e, index) => (
                  <img alt="sample1" width="644" src={e} key={index} />
                ))}
            </Slider>
          </div>
          <div className=" clearfix"></div>
        </div>
        <div className="entry-content">
          <p>{post && post.description}</p>
        </div>
        <div className="clearfix"></div>
        <div className="entry-meta">
          <FontAwesomeIcon
            icon="clock"
            style={{ width: 16, paddingRight: 10 }}
          />
          {post && post.createdAt_yyyymmdd}
        </div>

        <SnsShare title={post.title} url={`${URL.POSTS}/${id}`} />
      </section>
      <Modal>
        <SnsShare title={post.title} url={`${URL.POSTS}/${id}`} />
      </Modal>
    </Layout>
  )
}

// /** ここからSSGでビルドする場合の設定 */
// import fetch from 'node-fetch'
// import * as https from 'https'
// const agent = new https.Agent({
//   rejectUnauthorized: false,
// })
// import { API_ENDPOINT } from '@/common/constants/api'
// // 投稿IDの一覧を取得
// export async function getStaticPaths() {
//   const res = await fetch(API_ENDPOINT.POSTS, { agent })
//   const posts = await res.json()
//   const paths = posts.map((post) => `/posts/${post.id}`)
//   return { paths, fallback: false }
// }
// // 各投稿データを取得
// export async function getStaticProps({ params }) {
//   const res = await fetch(`${API_ENDPOINT.POSTS}/${params.id}`, { agent })
//   const post = await res.json()
//   return { props: { post: post.data } }
// }
// /** ここまでSSGでビルドする場合の設定 */

export default PostsDetail
