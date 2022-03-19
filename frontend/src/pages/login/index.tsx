import React, { useEffect, useState, FC, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { URL } from '@/common/constants/url'
import Layout from '@/components/Layout'
import Head from '@/components/pages/Head'
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from '@material-ui/core'
import { Input, Textarea } from '@/components/elements/Input'
import client from '@/utilities/api'
import { SIGN_IN } from '@/common/constants/api'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '@/auth/AuthProvider'

const Login: FC = () => {
  const router = useRouter()
  const auth = useContext(AuthContext)

  useEffect(() => {
    if (auth.currentUser) {
      router.push('/')
    }
  }, [])

  const errorMessage = (message) => <p className="error">{message}</p>
  const validationSchema = Yup.object().shape({
    email: Yup.string().required(
      errorMessage('メールアドレスを入力してください。')
    ),
    password: Yup.string().required(
      errorMessage('パスワードを入力してください。')
    ),
  })
  const onSubmit = async (values) => {
    const { email, password } = values
    const { data } = await client.mutate({
      mutation: SIGN_IN,
      variables: {
        email,
        password,
      },
    })
    auth.login(data.signin.token)
    router.push(URL.MEMBER)
  }

  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <Layout>
      <Head title="ログイン" />
      <section>
        <div className="entry-header">
          <h1 className="entry-title">ログイン</h1>
        </div>
        <div className="entry-content">
          <Grid container justifyContent="center" spacing={1}>
            <Grid item md={12}>
              <Card>
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
                          <Grid
                            item
                            container
                            spacing={1}
                            justifyContent="center"
                          >
                            <Grid item xs={12} sm={12} md={12}>
                              <Input
                                label="メールアドレス"
                                name="email"
                                type="text"
                              />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12}>
                              <Input
                                label="パスワード"
                                name="password"
                                type="password"
                              />
                            </Grid>
                          </Grid>
                        </CardContent>
                        <CardActions>
                          <Grid item xs={12} sm={6} md={6}>
                            <Button
                              disabled={!dirty || !isValid}
                              variant="contained"
                              color="primary"
                              type="Submit"
                            >
                              ログインする
                            </Button>
                          </Grid>
                        </CardActions>
                      </Form>
                    )
                  }}
                </Formik>
                <CardContent>
                  <Grid item container spacing={1}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Link href={URL.SIGNUP}>
                        <a>会員登録はこちら</a>
                      </Link>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default Login
