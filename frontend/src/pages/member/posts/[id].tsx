import React, { useEffect, useContext, useState, FC } from 'react'
import { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import { AuthContext } from '@/auth/AuthProvider'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from '@/components/pages/Head'
import MemberPostsForm from '@/components/pages/Member/Posts/MemberPostsForm'

const MemberPostsEdit: FC = () => {
  const router = useRouter()
  const auth = useContext(AuthContext)
  const [nowLoading, setNowLoading] = useState<boolean>(true)

  useEffect(() => {
    const user = auth.currentUser
    if (!user) {
      router.push(URL.LOGIN)
    } else {
      setNowLoading(false)
    }
  }, [])

  const [id, setId] = useState('')

  useEffect(() => {
    // idがqueryで利用可能になったら処理される
    if (router.asPath !== router.route) {
      setId(router.query.id)
    }
  }, [router])

  if (nowLoading) {
    return <>Loading...</>
  }

  return (
    <Layout>
      <Head title="投稿変更" />
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
            <li>
              <Link href={URL.MEMBER}>
                <a>
                  <span>マイページ</span>
                </a>
              </Link>
            </li>
            <li>投稿変更</li>
          </ul>
        </nav>
        <div className="entry-header">
          <h1 className="entry-title">投稿変更</h1>
        </div>
        <div className="entry-content">
          {id && <MemberPostsForm user={auth.currentUser} postId={id} />}
        </div>
      </section>
    </Layout>
  )
}

export default MemberPostsEdit
