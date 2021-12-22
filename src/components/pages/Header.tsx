import React, { useContext, FC } from 'react'
import Link from 'next/link'
import { URL } from '@/common/constants/url'
import Logo from '@/components/pages/Logo'
import { toggleMenu, closeMenu } from '@/store/slice/parts'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '@/auth/AuthProvider'
import { Parts } from '@/store/StoreTypes'
type State = {
  parts: Parts
}
const Header: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const auth = useContext(AuthContext)
  const { isSideMenuOpen } = useSelector((state: State) => state.parts)

  const logoutLink = (): JSX.Element => {
    if (auth.currentUser) {
      return (
        <a
          onClick={() => {
            auth.logout()
            router.push(URL.LOGIN)
            dispatch(closeMenu())
          }}
        >
          ログアウト
        </a>
      )
    }
    return (
      <Link href={URL.LOGIN}>
        <a onClick={() => dispatch(closeMenu())}>ログイン</a>
      </Link>
    )
  }

  const sideMenuClass = isSideMenuOpen ? 'open' : ''
  const menuBtnClass = isSideMenuOpen ? 'menu-btn on' : 'menu-btn'
  const layerPanelClass = isSideMenuOpen ? 'on' : ''

  return (
    <>
      <header className="header">
        <div className="wrapper">
          <Logo />
          <div className="nav">
            <div
              className={menuBtnClass}
              onClick={(e) => {
                e.preventDefault()
                dispatch(toggleMenu())
              }}
            >
              <figure></figure>
              <figure></figure>
              <figure></figure>
            </div>
            <div id="side-menu" className={sideMenuClass}>
              <nav>
                <ul>
                  <li>
                    <Link href={URL.HOME}>
                      <a onClick={() => dispatch(closeMenu())}>HOME</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={URL.MEMBER}>
                      <a onClick={() => dispatch(closeMenu())}>マイページ</a>
                    </Link>
                  </li>
                  <li>{logoutLink()}</li>
                </ul>
              </nav>
            </div>
            <div id="layer-panel" className={layerPanelClass}></div>
          </div>
        </div>
      </header>

      {
        // ナビゲーション（PC用）
      }
      <div id="pc-menu">
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <Link href={URL.HOME}>HOME</Link>
              </li>
              <li>
                <Link href={URL.MEMBER}>マイページ</Link>
              </li>
              <li>{logoutLink()}</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
