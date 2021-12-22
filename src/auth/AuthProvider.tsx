import React, { FC, createContext, useEffect, useState, ReactNode } from 'react'
import { User } from '@/store/StoreTypes'

type AuthContextProps = {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined })

type Props = {
  children?: ReactNode
}

const AuthProvider: FC = ({ children }: Props) => {
  // const currentUser = getUserPool().getCurrentUser()
  //
  // return (
  //   <AuthContext.Provider value={{ currentUser }}>
  //     {children}
  //   </AuthContext.Provider>
  // )
  return children
}

export { AuthContext, AuthProvider }
