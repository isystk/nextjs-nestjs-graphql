import React, { useEffect, useState, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import { showLoading, hideLoading } from '@/store/slice/parts'
import {
  getMemberPost,
  postMemberPost,
  putMemberPost,
  deleteMemberPost,
  selectMemberPosts,
} from '@/store/slice/memberPosts'
import { Input, Textarea } from '@/components/elements/Input'

import { Data, Post, User } from '@/store/StoreTypes'
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from '@material-ui/core'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import ImageFile from '@/components/elements/Input/ImageFile'
import moment from 'moment'
type PostDisplay = Post & {
  id: string
  regist_data_yyyymmdd: string
}
type Props = {
  postId?: string
  user: User
}
type State = {
  memberPosts: Data<Post>[]
}

const MemberPostsForm: FC<Props> = (props: Props) => {
  const { postId, user } = props
  const isEdit = !!postId
  const router = useRouter()
  const [nowLoading, setNowLoading] = useState<boolean>(true)
  const { loading, error, items } = useSelector(selectMemberPosts)

  const dispatch = useDispatch()
  useEffect(() => {
    // パスの投稿IDから投稿データを取得する
    ;(async () => {
      if (postId) {
        await dispatch(getMemberPost(Number(postId)))
        setNowLoading(false)
      } else {
        setNowLoading(false)
      }
    })()
  }, [postId])

  const [post, setPost]: PostDisplay = useState({})
  useEffect(() => {
    const data = items[postId] || {
      title: '',
      description: '',
      photo: '',
    }
    setPost({
      ...data,
      regist_data_yyyymmdd:
        data.regist_datetime &&
        moment(data.regist_datetime).format('YYYY/MM/DD HH:mm'),
    })
  }, [items])

  const useStyle = makeStyles((theme) => ({
    padding: {
      padding: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1),
    },
  }))
  const classes = useStyle()

  if (loading || nowLoading) return <p>...loading</p>
  if (error) return <p>{error}</p>
  if (postId && post && Number(user.id) !== Number(post.authorId))
    return <p>Not Found</p>

  const initialValues = {
    ...post,
  }

  const errorMessage = (message) => <p className="error">{message}</p>
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(errorMessage('タイトルを入力してください。')),
    description: Yup.string().required(
      errorMessage('本文を入力してください。')
    ),
    photo: Yup.string().required(errorMessage('写真を入力してください。')),
  })

  const onSubmit = async (values) => {
    // ローディング表示
    dispatch(showLoading())
    const data = { ...values, authorId: Number(user.id) }
    if (isEdit) {
      await dispatch(putMemberPost(Number(postId), data))
    } else {
      await dispatch(postMemberPost(data))
    }
    // マイページTOPに画面遷移する
    router.push(URL.MEMBER)
    // ローディング非表示
    dispatch(hideLoading())
  }

  const onDeleteClick = async () => {
    if (!window.confirm('削除します。よろしいですか？')) {
      return false
    }
    // ローディング表示
    dispatch(showLoading())
    await dispatch(deleteMemberPost(Number(postId)))
    // マイページTOPに画面遷移する
    router.push(URL.MEMBER)
    // ローディング非表示
    dispatch(hideLoading())
  }

  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item md={12}>
        <Card className={classes.padding}>
          <CardHeader title="投稿する記事内容を入力してください。"></CardHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              setFieldValue,
              dirty,
              isValid,
              values,
              handleChange,
              handleBlur,
            }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justifyContent="center">
                      <Grid item xs={12} sm={12} md={12}>
                        <Input label="タイトル" name="title" type="text" />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <Textarea label="本文" name="description" />
                      </Grid>
                      <Grid item xs={12} sm={12} md={12}>
                        <ImageFile label="写真" name="photo" />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid item xs={12} sm={6} md={6}>
                      {isEdit && (
                        <Button
                          variant="contained"
                          color="secondary"
                          type="Button"
                          className={classes.button}
                          onClick={onDeleteClick}
                        >
                          削除する
                        </Button>
                      )}
                      <Button
                        disabled={!dirty || !isValid}
                        variant="contained"
                        color="primary"
                        type="Submit"
                        className={classes.button}
                      >
                        登録する
                      </Button>
                    </Grid>
                  </CardActions>
                </Form>
              )
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  )
}

export default MemberPostsForm
