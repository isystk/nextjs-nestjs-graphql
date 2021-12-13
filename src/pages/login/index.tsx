import React, { useEffect, useState, FC, useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  CognitoUser,
  CognitoUserAttribute,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js'
import { getUserPool } from '../../utilities/aws'
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
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    })
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: getUserPool(),
    })

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('result: ' + result)
        const accessToken = result.getAccessToken().getJwtToken()
        console.log('AccessToken: ' + accessToken)
        router.push(URL.HOME)
      },
      onFailure: (err) => {
        console.error(err)
        alert(err.message)
      },
      // newPasswordRequired: function (userAttributes, requiredAttributes) {
      //   // コンソールからユーザを登録した場合、初回認証時に強制的にパスワードを変える必要がある。
      //   // https://qiita.com/k_hoso/items/afe9aa8183b8bf0651a1
      //   cognitoUser.completeNewPasswordChallenge('Test@1234', {}, this)
      // },
    })
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
