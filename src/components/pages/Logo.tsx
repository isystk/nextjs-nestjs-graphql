import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { URL } from '@/common/constants/url'

const Title: React.FC = styled.h1`
  font-size: 25px;
  color: #fff;
`

const Logo: React.FC = () => {
  return (
    <div className="header-logo">
      <Link href={URL.HOME}>
        <a>
          <Title>{process.env.APP_NAME}</Title>
        </a>
      </Link>
    </div>
  )
}

export default Logo
