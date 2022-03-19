import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import Header from '@/components/pages/Header'
import Footer from '@/components/pages/Footer'
import { FC } from 'react'
import { Parts } from '@/store/StoreTypes'
type State = {
  parts: Parts
}
type Props = {
  children?: ReactNode
  title?: string
}

const Layout: FC = ({ children }: Props) => {
  const { isShowLoading } = useSelector((state: State) => state.parts)

  return (
    <>
      <Header />

      <div className="contents">
        <div className="wrapper">{children}</div>
      </div>

      <Footer />
      {isShowLoading && (
        <div id="site_loader_overlay">
          <div className="site_loader_spinner"></div>
        </div>
      )}
    </>
  )
}

export default Layout
