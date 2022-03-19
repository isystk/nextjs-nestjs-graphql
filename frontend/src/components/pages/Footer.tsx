import React, { useContext, useState, FC } from 'react'
import Link from 'next/link'
import { URL } from '@/common/constants/url'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toggleMenu, closeMenu, showOverlay } from '@/store/slice/parts'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '@/auth/AuthProvider'
import { Parts } from '@/store/StoreTypes'
type State = {
  parts: Parts
}
const Footer: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const auth = useContext(AuthContext)
  const { isSideMenuOpen } = useSelector((state: State) => state.parts)
  const [scrollTop, setScrollTop] = useState(0)
  const scrollToTop = (e): void => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  let scrollTopClass = 'link hide'
  if (scrollTop > 100) {
    scrollTopClass = 'link '
  }

  return (
    <>
      <footer className="footer">
        <div className="wrapper">
          <nav className="footer-nav">
            <ul>
              <li>
                <Link href={URL.HOME}>
                  <a onClick={() => dispatch(closeMenu())}>
                    <FontAwesomeIcon icon="home" style={{ width: 16 }} />
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    dispatch(showOverlay())
                  }}
                >
                  <FontAwesomeIcon icon="share-alt" style={{ width: 16 }} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    dispatch(toggleMenu())
                  }}
                >
                  <FontAwesomeIcon icon="bars" style={{ width: 16 }} />
                </a>
              </li>
              <li>
                <a href="#" className="js-scroll-top" onClick={scrollToTop}>
                  <FontAwesomeIcon icon="chevron-up" style={{ width: 16 }} />
                </a>
              </li>
            </ul>
          </nav>
          <section className="follow-links">
            <ul className="menu">
              <li>
                <a
                  href="https://profile.isystk.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/isystk/isystk-frontend-sample"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    style={{ width: 16 }}
                  />
                  Github
                </a>
              </li>
            </ul>
          </section>
          <section className="copylight">© 2020 isystk&apos;s sample</section>
        </div>
      </footer>
      <span id="page-top" className={scrollTopClass}>
        <a href="#" onClick={scrollToTop}>
          <FontAwesomeIcon icon="chevron-up" style={{ width: 16 }} />
        </a>
      </span>
    </>
  )
}

export default Footer
