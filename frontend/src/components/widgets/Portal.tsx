import ReactDOM from 'react-dom'
import React, { FC, useRef, useState, useEffect } from 'react'

const Portal: FC = ({ children }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('#__next')
    setMounted(true)
  }, [])

  return mounted ? ReactDOM.createPortal(<>{children}</>, ref.current) : null
}

export default Portal
