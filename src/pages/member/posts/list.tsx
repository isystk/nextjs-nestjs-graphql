import React, { useEffect, useContext, useState, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Router, { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import moment from 'moment'
import { selectMemberPosts, getMemberPosts } from '@/store/slice/memberPosts'

import { Data, Post } from '@/store/StoreTypes'
import { AuthContext } from '@/auth/AuthProvider'
import * as _ from 'lodash'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from '@/components/pages/Head'
type State = {
  memberPosts: Data<Post>[]
}
type PostDisplay = Post & {
  id: string
  regist_data_yyyymmdd: string
}

const MemberPostsList: FC = () => {
  const router = useRouter()
  const auth = useContext(AuthContext)
  const dispatch = useDispatch()
  const { loading, error, items } = useSelector(selectMemberPosts)
  const [nowLoading, setNowLoading] = useState<boolean>(true)

  useEffect(() => {
    const user = auth.currentUser
    if (!user) {
      router.push(URL.LOGIN)
    } else {
      setNowLoading(false)
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      const user = auth.currentUser
      user && (await dispatch(getMemberPosts(Number(user.id))))
    })()
  }, [dispatch])

  const posts = useSelector((state: State) => {
    return _.map(
      items,
      (post, i): PostDisplay => {
        return {
          ...post,
          createdAt_yyyymmdd: post.createdAt
            ? moment(post.createdAt).format('YYYY/MM/DD')
            : '',
        }
      }
    )
  })

  if (loading || nowLoading) return <p>...loading</p>
  if (error) return <p>{error}</p>

  const renderPosts = (): JSX.Element => {
    const photoStyle = {
      display: 'flex',
      flexDirection: 'row',
    }
    return (
      <>
        {(posts || []).map((post) => {
          return (
            <TableRow key={post.id}>
              <TableRowColumn width="120px">{post.id}</TableRowColumn>
              <TableRowColumn width="100px">{post.title}</TableRowColumn>
              <TableRowColumn>
                <div style={photoStyle as React.CSSProperties}>
                  {[post.photo].map((image, index) => (
                    <span style={{ marginLeft: '10px' }} key={`image${index}`}>
                      {image && <img src={image} width="100px" />}
                    </span>
                  ))}
                </div>
              </TableRowColumn>
              <TableRowColumn width="100px">
                {post.createdAt_yyyymmdd}
              </TableRowColumn>
              <TableRowColumn width="100px">
                <input
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    Router.push(`${URL.MEMBER_POSTS}/${post.id}`)
                  }}
                  value="変更"
                />
              </TableRowColumn>
            </TableRow>
          )
        })}
      </>
    )
  }

  return (
    <Layout>
      <Head title="投稿一覧" />
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
            <li>マイページ</li>
          </ul>
        </nav>
        <div className="entry-header">
          <h1 className="entry-title">投稿一覧</h1>
        </div>
        <div className="entry-content">
          <p>
            <input
              type="button"
              onClick={(e) => {
                e.preventDefault()
                Router.push(URL.MEMBER_POSTS_NEW)
              }}
              value="新規登録"
            />
          </p>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableRowColumn width="120px">ID</TableRowColumn>
                <TableRowColumn width="100px">タイトル</TableRowColumn>
                <TableRowColumn>画像</TableRowColumn>
                <TableRowColumn width="100px">投稿日時</TableRowColumn>
                <TableRowColumn width="100px">
                  <br />
                </TableRowColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>{renderPosts()}</TableBody>
          </Table>
        </div>
      </section>
    </Layout>
  )
}

export default MemberPostsList
