import React, { FC } from 'react'
import NextHead from 'next/head'

interface Props {
  title?: string
  description?: string
  keyword?: string
  image?: string
  url?: string
}

const initialValues: Props = {
  title: process.env.APP_NAME || '',
  description: process.env.APP_DESCRIPTION || '',
  keyword: '',
  image: '',
  url: '',
}

const Head: FC = (props: Props): JSX.Element => {
  const { title, description, keyword, image, url } = {
    ...initialValues,
    ...props,
  }
  return (
    <NextHead>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href={'https://t-cr.jp/favicon.ico'} />
      <link rel="apple-touch-icon" href={'https://t-cr.jp/logo.png'} />
    </NextHead>
  )
}

export default Head
